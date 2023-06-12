import styled from 'styled-components';

import { Image } from '../../types';

const Thumbnail = styled.img.attrs({
  alt: 'Product Image',
})`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

export default function Images({ images } : {
  images : Image[]
}) {
  const [image] = images;

  if (!image) {
    return null;
  }

  return (
    <Thumbnail src={image.url} />
  );
}
