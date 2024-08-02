import { action, computed, makeAutoObservable, observable } from 'mobx';
import type { Product, ProductId } from 'domain/model/product';

interface BasketItem {
  value: Product;
  count: number;
}
class BasketStore {
  @observable basket: Record<ProductId, BasketItem> = {};

  constructor () {
    makeAutoObservable(this);
  }

  @computed
  get totalCount() {
    return this.basketArray.reduce((acc, current) => acc + current.count, 0);
  };

  @computed
  get totalPrice() {
    const price = this.basketArray.reduce((acc, current) => {
      return acc + (current.count * current.value.price);
    }, 0);

    return price.toFixed(2);
  };

  @computed
  get basketArray() {
    return Object.values(this.basket);
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
  removeProduct(itemId: ProductId) {
    const newBasket = { ...this.basket };
    delete newBasket[itemId];
    this.basket = newBasket;
  };

  @action
  incrementProduct(itemId: ProductId) {
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
  decrementProduct(itemId: ProductId) {
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