import React from 'react';
import Item from './components/item';
import {Container, List, Title} from './styles';

export default function ForUser() {
  return (
    <Container>
      <Title>Feitos para DIogo</Title>
      <List data={['', '', '', '', '']} renderItem={() => Item()} horizontal />
    </Container>
  );
}
