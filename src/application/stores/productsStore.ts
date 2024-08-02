import { Product } from 'domain/model/product';
import { productsApi } from 'infrastructure/api/products';
import { action, computed, makeAutoObservable, observable, runInAction } from 'mobx';

class ProductsStore {
  @observable products: Product[] = [];
  @observable categories: string[] = [];
  @observable selectedCategory: string | null = null;
  @observable maxProductsToViewCount = 20;
  @observable isProductsFetching = false;
  private limit: number = 5;

  constructor () {
    makeAutoObservable(this);
  };

  @computed
  get isLimitReached() {
    return this.products.length >= this.maxProductsToViewCount;
  }

  @action
  async getProducts() {
    try {
      this.isProductsFetching = true;

      let fetchedProducts;
      if (this.selectedCategory) {
        fetchedProducts = await productsApi.getProductsByCategory(this.selectedCategory);
      } else {
        fetchedProducts = await productsApi.getProducts(this.limit);
      }
      runInAction(() => {
        this.products = fetchedProducts;
      });
    } catch (e) {
      console.log(e);
    } finally {
      runInAction(() => {
        this.isProductsFetching = false;
      });
    }
  }

  @action
  changeCategory(category: string | null) {
    this.setCategory(category);
    this.getProducts();
  }

  @action
  setCategory(category: string | null) {
    this.selectedCategory = category;
  }

  @action
  fetchNext = async () => {
    this.limit += 5;
    await this.getProducts();
  };

  @action
  async getCategories() {
    try {
      const data = await productsApi.getCategories();
      runInAction(() => {
        this.categories = data;
      });
    } catch(e) {
      console.log(e);
    }
  };
};

export default new ProductsStore;
