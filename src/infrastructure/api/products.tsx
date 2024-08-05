import { Product, ProductId } from 'domain/model/product';
import { mock } from 'domain/mock';
class ProductsApi {
  constructor(private baseurl: string) {}

  async getProducts(limit: number = 5): Promise<Product[]> {
    // const response = await fetch(`${this.baseurl}/products/?limit=${limit}`);
    // return response.json();
    return mock;
  }
  
  async getProductsByCategory(category: string): Promise<Product[]> {
    const response = await fetch(`${this.baseurl}/products/category/${category}`);
    return response.json();
  }

  async getProduct(id: ProductId): Promise<Product> {
    const response = await fetch(`${this.baseurl}/products/${id}`);
    return response.json();
  };

  async getCategories(): Promise<string[]> {
    const response = await fetch(`${this.baseurl}/products/categories`);
    return response.json();
  }
}

export const productsApi = new ProductsApi('https://fakestoreapi.com');
