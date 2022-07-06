import React from 'react';
import Item from './components/item';
import {Container} from './styles';

const ImageRequire = require('../../../../res/images/artworks00.jpg');

export default function MostListened() {
  return (
    <Container>
      <Item ImageSRC={ImageRequire} />
      <Item ImageSRC={ImageRequire} />
      <Item ImageSRC={ImageRequire} />
      <Item ImageSRC={ImageRequire} />
    </Container>
  );
}
