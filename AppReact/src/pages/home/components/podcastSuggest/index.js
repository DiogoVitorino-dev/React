import React from 'react';
import Item from './components/item';
import {Container, List, Title} from './styles';

export default function PodcastSuggest() {
  return (
    <Container>
      <Title>Episodios para você</Title>
      <List data={['', '', '', '', '']} renderItem={() => Item()} horizontal />
    </Container>
  );
}
