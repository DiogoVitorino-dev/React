import React from 'react';
import {Container, ItemAuthorText, ItemImage, Touchable} from './styles';

const ImageRequire = require('../../../../../../res/images/artworks00.jpg');

export default function ItemRounded() {
  return (
    <Touchable>
      <Container>
        <ItemImage source={ImageRequire} />
        <ItemAuthorText>So track boa mix 2022</ItemAuthorText>
      </Container>
    </Touchable>
  );
}
