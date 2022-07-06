import React from 'react';
import Header from './components/header';
import List from './components/list';
import {Container} from './styles';

export default function LibraryScreen() {
  return (
    <Container>
      <Header />
      <List />
    </Container>
  );
}
