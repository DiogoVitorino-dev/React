import React from 'react';
import Item from './components/item';
import ItemRounded from './components/itemRounded';
import {Container, List, Title} from './styles';

export default function RecentlyListened() {
  return (
    <Container>
      <Title>Tocadas Recetemente</Title>
      <List
        data={[
          {type: 'artist'},
          {type: 'artist'},
          {type: 'playlist'},
          {type: 'dailymix'},
          {type: 'linkedPlaylist'},
        ]}
        renderItem={data =>
          data.item.type === 'artist' ? ItemRounded() : Item()
        }
        horizontal
      />
    </Container>
  );
}
