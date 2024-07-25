import { Product } from 'domain/model/product';
import { getProducts, getProduct } from 'infrastructure/api/getProducts';
import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

class ProductsStore {
  products?: IPromiseBasedObservable<Product[]>;
  product?: IPromiseBasedObservable<Product>;
  limit: number = 5;

  constructor () {
    makeAutoObservable(this);
  };

  getProductsAction = () => {
    this.products = fromPromise(getProducts(`https://fakestoreapi.com/products?limit=${this.limit}`))
  };

  getProductAction = (slug: string) => {
    this.product = fromPromise(getProduct(`https://fakestoreapi.com/products/${slug}`));
  };

  uploadProducts = () => {
    this.limit += 5;
    this.products = fromPromise(getProducts(`https://fakestoreapi.com/products?limit=${this.limit}`))
  };

};

export default new ProductsStore;
