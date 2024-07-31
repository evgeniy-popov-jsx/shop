export type ProductId = Brand<number, 'ProductId'>;

export interface Product {
  id: ProductId;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number, count: number };
}
