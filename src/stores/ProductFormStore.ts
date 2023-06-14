import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import {
  ProductDetail, ProductOption, ProductOptionItem, nullProductDetail,
} from '../types';
import { apiService } from '../services/ApiService';

@singleton()
@Store()
export default class ProductFormStore {
  product: ProductDetail = nullProductDetail;

  productId = '';

  options: ProductOption[] = [];

  selectedOptionItems: ProductOptionItem[] = [];

  quantity = 1;

  done = false;

  async addToCart() {
    this.resetDone();

    await apiService.addProductToCart({
      productId: this.productId,
      options: this.options.map((option, index) => ({
        id: option.id,
        itemId: this.selectedOptionItems[index].id,
      })),
      quantity: this.quantity,
    });

    this.complete();
  }

  @Action()
  setProduct(product: ProductDetail) {
    this.product = product;
    this.productId = product.id;
    this.options = product.options;
    this.selectedOptionItems = this.options.map((i) => i.items[0]);
    this.quantity = 1;
    this.done = false;
  }

  @Action()
  changeQuantity(quantity: number) {
    if (quantity <= 0) {
      return;
    }
    if (quantity > 10) {
      return;
    }
    this.quantity = quantity;
  }

  @Action()
  resetDone() {
    this.done = false;
  }

  @Action()
  complete() {
    this.quantity = 1; // 장바구니 담으면 초기화
    this.done = true;
  }

  @Action()
  changeOptionItem({ optionId, optionItemId }: {
    optionId: string;
    optionItemId: string;
  }) {
    this.selectedOptionItems = this.product.options.map((option, index) => {
      const item = this.selectedOptionItems[index];

      return option.id !== optionId
        ? item
        : option.items.find((i) => i.id === optionItemId) ?? item;
    });
  }

  get price() {
    return this.product.price * this.quantity;
  }
}
