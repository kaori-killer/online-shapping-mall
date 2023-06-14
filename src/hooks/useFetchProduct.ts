import { useEffect } from 'react';

import useProductDetailStore from './useProductDetailStore';

const useFetchProduct = ({ productId } : {
    productId: string;
}) => {
  const [{ loading, error }, store] = useProductDetailStore();

  useEffect(() => {
    store.fetchProduct({ productId });
  }, [store, productId]);

  return { loading, error };
};

export default useFetchProduct;
