import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';

import ProductDetailStore from '../stores/ProductDetailStore';

const useProductDetailStore = () => {
  const store = container.resolve(ProductDetailStore);
  return useStore(store);
};

export default useProductDetailStore;
