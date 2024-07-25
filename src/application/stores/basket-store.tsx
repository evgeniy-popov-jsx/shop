import { makeAutoObservable } from 'mobx';
import { Product } from 'domain/model/product';

class BasketStore {
  basket: Product[] = [];
  
  constructor () {
    makeAutoObservable(this);
  }

  addBusket = (item: Product) => {
    const itemInBasket  = this.basket.find(basketItem => basketItem.id === item.id);

    if (itemInBasket ) {
      itemInBasket .count = (itemInBasket .count ?? 0);
    } else {
      this.basket.push({ ...item, count: 1 });
    }
  };

  removeBusket = (itemId: number) => {
    this.basket = this.basket.filter(item => item.id !== itemId);
  };

}

export default new BasketStore;