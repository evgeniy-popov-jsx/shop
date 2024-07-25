import { Product } from 'domain/model/product';
import { getProducts } from 'infrastructure/api/getProducts';
import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

class ProductsStore {
  products?: IPromiseBasedObservable<Product[]>;

  constructor () {
    makeAutoObservable(this);
  };

  getProductsAction = () => {
    this.products = fromPromise(getProducts('https://fakestoreapi.com/products'))
  };

};

export default new ProductsStore;
