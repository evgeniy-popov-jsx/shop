import type { Product, ProductId } from 'domain/model/product';
import { productsApi } from 'infrastructure/api/products';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';

class ProductStore {
  @observable product: Product | null = null;
  @observable isLoading = false;

  constructor () {
    makeAutoObservable(this);
  };

  @action
  async getProduct(slug: ProductId) {
    try {
      this.isLoading = true;
      const product = await productsApi.getProduct(slug);
      runInAction(() => {
        this.product = product;
      });
    } catch (e) {
      console.log(e);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
};

export default new ProductStore;
