import { useEffect } from 'react';
import styled from 'styled-components';

import useProductDetailStore from '../../../hooks/useProductDetailStore';
import useProductFormStore from '../../../hooks/useProductFormStore';

import numberFormat from '../../../utils/numberFormat';

const Container = styled.div`
    margin-block: 0.5rem;
`;

export default function Price() {
  const [{ product }] = useProductDetailStore();
  const [, productFormStore] = useProductFormStore();

  useEffect(() => {
    productFormStore.setProduct(product);
  }, [product, productFormStore]);

  return (
    <Container>
      {numberFormat(productFormStore.price)}
      원
    </Container>
  );
}
