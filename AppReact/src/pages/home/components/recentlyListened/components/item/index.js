import React from 'react';
import {Container, ItemImage, ItemTitleText, Touchable} from './styles';

const ImageRequire = require('../../../../../../res/images/artworks00.jpg');

export default function Item() {
  return (
    <Touchable>
      <Container>
        <ItemImage source={ImageRequire} />
        <ItemTitleText>So track boa mix 2022</ItemTitleText>
      </Container>
    </Touchable>
  );
}
