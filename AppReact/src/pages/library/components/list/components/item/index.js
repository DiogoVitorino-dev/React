import React from 'react';
import {Author, Container, ItemImage, TextContainer, Title} from './styles';

const ImageRequire = require('../../../../../../res/images/artworks00.jpg');

export default function Item() {
  return (
    <Container>
      <ItemImage source={ImageRequire} />
      <TextContainer>
        <Title>Musicas Curtidas</Title>
        <Author>Playlist . 78 musicas</Author>
      </TextContainer>
    </Container>
  );
}
