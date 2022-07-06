import React from 'react';
import Item from './components/item';
import {Container, ItemContainer, Title} from './styles';

const ImageRequire = require('../../../../res/images/artworks00.jpg');

export default function FavoriteGenres() {
  return (
    <Container>
      <Title>Seu generos favoritos</Title>
      <ItemContainer>
        <Item ImageSRC={ImageRequire} />
        <Item ImageSRC={ImageRequire} />
      </ItemContainer>
    </Container>
  );
}
