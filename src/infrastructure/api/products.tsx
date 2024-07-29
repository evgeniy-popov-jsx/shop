import { Product } from 'domain/model/product';

class ProductsApi {
  constructor(private baseurl: string) {}

  async getProducts(limit: number = 5): Promise<Product[]> {
    const response = await fetch(`${this.baseurl}/products?limit=${limit}`);
    return response.json();
  }

  async getProduct(id: string): Promise<Product> {
    const response = await fetch(`${this.baseurl}/products/${id}`);
    return response.json();
  };
}

export const productsApi = new ProductsApi('https://fakestoreapi.com');
