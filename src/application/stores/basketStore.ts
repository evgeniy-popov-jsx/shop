import { action, computed, makeAutoObservable, observable } from 'mobx';
import type { Product } from 'domain/model/product';

class BasketStore {
  @observable basket: Record<number, { value: Product, count: number }> = {};
  @observable totalPrice: number = 0;

  constructor () {
    makeAutoObservable(this);
  }

  @computed
  get TotalCount() {
    let totalCount = 0;

    this.basketArray.forEach((item: { count: number; }) => {
      totalCount += item.count;
    });

    return totalCount;
  };

  @computed
  get TotalPrice() {
    let totalPrice = 0;

    Object.values(this.basket).forEach(item => {
      totalPrice += item.count * item.value.price;
    });

    return totalPrice.toFixed(2);
  };

  @computed
  get basketArray() {
    return Object.values(this.basket);
  }

  @computed
  hasProduct(itemId: number): boolean {
    return itemId in this.basket;
  }
  
  @action
  addProduct(item: Product) {
    this.basket = {
      ...this.basket,
      [item.id]: {
        value: item,
        count: 1,
      }
    };
  };
  
  @action
  removeProduct(itemId: number) {
    const newBasket = { ...this.basket };
    delete newBasket[itemId];
    this.basket = newBasket;
  };

  @action
  incrementProduct(itemId: number) {
    const item = this.basket[itemId];
    this.basket = {
      ...this.basket,
      [itemId]: {
        ...item,
        count: item.count + 1,
      }
    };
  };

  @action
  decrementProduct(itemId: number) {
    const item = this.basket[itemId];

    if (item.count > 1) {
      this.basket = {
        ...this.basket,
        [itemId]: {
          ...item,
          count: item.count - 1,
        }
      };
      return;
    }

    this.removeProduct(itemId);
  };

}

export default new BasketStore;