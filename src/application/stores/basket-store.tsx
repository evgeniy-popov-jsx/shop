import { makeAutoObservable } from 'mobx';
import { Product } from 'domain/model/product';

class BasketStore {
  basket: Product[] = [];
  
  constructor () {
    makeAutoObservable(this);
  }

  addBusket = (item: Product) => {
    this.basket.push(item)
  };

  removeBusket = (itemId: number) => {
    this.basket = this.basket.filter(item => item.id !== itemId);
  };
  
}

export default new BasketStore;