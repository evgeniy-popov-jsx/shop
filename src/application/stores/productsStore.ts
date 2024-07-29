import { Product } from 'domain/model/product';
import { productsApi } from 'infrastructure/api/products';
import { action, computed, makeAutoObservable, observable, runInAction } from 'mobx';

class ProductsStore {
  @observable products: Product[] = [];
  @observable maxProductsToViewCount = 20;
  @observable isProductsFetching = false;
  private limit: number = 5;

  constructor () {
    makeAutoObservable(this);
  };

  @action
  getProducts = async () => {
    try {
      this.isProductsFetching = true;
      const fetchedProducts = await productsApi.getProducts(this.limit);
      runInAction(() => {
        this.products = fetchedProducts;
      });
    } catch(e) {
      console.log(e);
    } finally {
      runInAction(() => {
        this.isProductsFetching = false;
      });
    }
  };

  @action
  fetchNext = async () => {
    this.limit += 5;
    await this.getProducts();
  };

  @computed
  get isLimitReached() {
    return this.products.length >= this.maxProductsToViewCount;
  }
};

export default new ProductsStore;
