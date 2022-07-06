import React from 'react';
import Item from './components/item';
import {Container, ItemContainer, Title} from './styles';

const ImageRequire = require('../../../../res/images/artworks00.jpg');

export default function OthersGenres() {
  return (
    <Container>
      <Title>Navegar por todas as seções</Title>
      <ItemContainer>
        <Item ImageSRC={ImageRequire} />
        <Item ImageSRC={ImageRequire} />
      </ItemContainer>
      <ItemContainer>
        <Item ImageSRC={ImageRequire} />
        <Item ImageSRC={ImageRequire} />
      </ItemContainer>
      <ItemContainer>
        <Item ImageSRC={ImageRequire} />
        <Item ImageSRC={ImageRequire} />
      </ItemContainer>
      <ItemContainer>
        <Item ImageSRC={ImageRequire} />
        <Item ImageSRC={ImageRequire} />
      </ItemContainer>
      <ItemContainer>
        <Item ImageSRC={ImageRequire} />
        <Item ImageSRC={ImageRequire} />
      </ItemContainer>
      <ItemContainer>
        <Item ImageSRC={ImageRequire} />
        <Item ImageSRC={ImageRequire} />
      </ItemContainer>
      <ItemContainer>
        <Item ImageSRC={ImageRequire} />
        <Item ImageSRC={ImageRequire} />
      </ItemContainer>
    </Container>
  );
}
