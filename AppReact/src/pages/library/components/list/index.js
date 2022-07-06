import React from 'react';
import Item from './components/item';
import ListHeader from './components/listConfigs';
import {Container, Flist} from './styles';

export default function List() {
  return (
    <Container>
      <Flist
        data={['', '', '', '', '', '', '', '', '']}
        renderItem={() => Item()}
        ListHeaderComponent={() => ListHeader()}
      />
    </Container>
  );
}
