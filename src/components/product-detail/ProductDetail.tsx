import styled from 'styled-components';

import useProductDetailStore from '../../hooks/useFetchProductDetail';

import Images from './Images';
import Description from './Description';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  aside {
    width: 38%;
  }

  article {
    width: 60%;
  }
`;

export default function ProductDetail() {
  const [{ product }] = useProductDetailStore();

  return (
    <Container>
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        {/* <AddToCartForm /> 추후 추가 예정 */}
        <Description value={product.description} />
      </article>
    </Container>
  );
}
