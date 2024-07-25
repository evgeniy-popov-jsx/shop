import { makeAutoObservable } from 'mobx';
import { Product } from 'domain/model/product';

class BasketStore {
  basket: Product[] = [];
  totalPrice: number = 0;

  constructor () {
    makeAutoObservable(this);
  }

  addBusket = (item: Product) => {
    const itemInBasket  = this.basket.find(basketItem => basketItem.id === item.id);
    
    if (itemInBasket ) {
      itemInBasket.count = (itemInBasket.count ?? 0) + 1;
    } else {
      this.basket.push({ ...item, count: 1 });
    }
  };

  removeBusket = (itemId: number) => {
    this.basket = this.basket.filter(item => item.id !== itemId);
  };

  incrementProduct = (itemId: number) => {
    const itemInBasket  = this.basket.find(basketItem => basketItem.id === itemId);

    if(itemInBasket) {
      itemInBasket.count = (itemInBasket.count ?? 0) + 1;
    }
  };

  decrementProduct = (itemId: number) => {
    const itemInBasket = this.basket.find(basketItem => basketItem.id === itemId);

    if (itemInBasket) {
      itemInBasket.count = (itemInBasket.count ?? 1) - 1;

    if (itemInBasket.count <= 0) {
        this.removeBusket(itemId);
      }
    }
  };

  getTotalCount = (): number => {
    return this.basket.reduce((total, item) => total + (item.count ?? 0), 0);
  };

  getTotalPrice = (): string => {
    const totalPrice = this.basket.reduce((total, item) => total + (item.price * (item.count ?? 1)), 0);
    return totalPrice.toFixed(2);
  };

}

export default new BasketStore;