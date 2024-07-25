import { Product } from 'domain/model/product';

export const getProducts = async ( url: string ): Promise<Product[]> => {
  return fetch(url)
    .then((response) => {
      return response.json();
    });
};