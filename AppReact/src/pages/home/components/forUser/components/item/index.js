import React from 'react';
import {Container, ItemImage, ItemTitleText, Touchable} from './styles';

const ImageRequire = require('../../../../../../res/images/artworks00.jpg');

export default function Item() {
  return (
    <Touchable>
      <Container>
        <ItemImage source={ImageRequire} />
        <ItemTitleText>
          Um mix de musicas e noticias feito para você
        </ItemTitleText>
      </Container>
    </Touchable>
  );
}
