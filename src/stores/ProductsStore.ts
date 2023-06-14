import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { ProductDetail, ProductSummary, nullProductDetail } from '../types';
import { apiService } from '../services/ApiService';

@singleton()
@Store()
export default class ProductsStore {
  products: ProductSummary[] = [];

  product: ProductDetail = nullProductDetail;

  async fetchProducts({ categoryId }: {
    categoryId?: string
  }) {
    this.setProducts([]);

    const products = await apiService.fetchProducts({ categoryId });

    this.setProducts(products);
  }

  @Action()
  setProducts(products: ProductSummary[]) {
    this.products = products;
  }

  @Action()
  setProduct(product: ProductDetail) {
    this.product = product;
  }

  get price() {
    return this.product.price * this.quantity;
  }
}
