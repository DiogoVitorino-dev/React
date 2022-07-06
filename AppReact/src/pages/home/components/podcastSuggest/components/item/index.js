import React from 'react';
import {
  Container,
  ItemAuthorText,
  ItemImage,
  ItemTitleText,
  Touchable,
} from './styles';

const ImageRequire = require('../../../../../../res/images/artworks00.jpg');

export default function Item() {
  return (
    <Touchable>
      <Container>
        <ItemImage source={ImageRequire} />
        <ItemTitleText>Historia de Renata Glasc Epaminondas</ItemTitleText>
        <ItemAuthorText>Universo Ludico</ItemAuthorText>
      </Container>
    </Touchable>
  );
}
