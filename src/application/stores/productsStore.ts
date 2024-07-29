import { Product } from 'domain/model/product';
import { productsApi } from 'infrastructure/api/products';
import { action, computed, makeAutoObservable, observable, runInAction } from 'mobx';

class ProductsStore {
  @observable products: Product[] = [];
  @observable filters: string[] = [];
  @observable currentFilter: string | null = null;
  @observable maxProductsToViewCount = 20;
  @observable isProductsFetching = false;
  private limit: number = 5;

  constructor () {
    makeAutoObservable(this);
  };

  @computed
  get isLimitReached() {
    if(this.currentFilter) {
      return true;
    }
    return this.products.length >= this.maxProductsToViewCount;
  }

  @action
  async getProducts() {
    try {
      this.isProductsFetching = true;

      let fetchedProducts;
      if (this.currentFilter) {
        fetchedProducts = await productsApi.getProductsFilter(this.currentFilter);
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
  setFilter(filter: string | null) {
    this.currentFilter = filter;
    this.limit = 5;
    this.getProducts();
  }

  @action
  fetchNext = async () => {
    this.limit += 5;
    await this.getProducts();
  };

  @action
  async getFilters() {
    try {
      const fetchedFilters = await productsApi.getFilters();
      runInAction(() => {
        this.filters = fetchedFilters;
      });
    } catch(e) {
      console.log(e);
    }
  };
};

export default new ProductsStore;
