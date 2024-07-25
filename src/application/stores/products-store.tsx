import { Product } from 'domain/model/product';
import { getProducts } from 'infrastructure/api/getProducts';
import { makeAutoObservable } from 'mobx';

class ProductsStore {
  products: Product[] = [];

  constructor () {
    makeAutoObservable(this);
  };

  getProductsAction = async () => {
    try {
      const res = await getProducts('https://fakestoreapi.com/products');
      this.products = res;
    } catch {
      console.log('ошибка')
    }
  };

};

export default new ProductsStore;
