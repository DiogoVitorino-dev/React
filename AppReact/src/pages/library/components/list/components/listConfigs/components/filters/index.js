import React from 'react';
import Item from './components/item';
import {List} from './styles';

export default function Filters() {
  return (
    <List
      data={[{name: 'Playlist'}, {name: 'Artista'}, {name: 'Album'}]}
      renderItem={data => Item(data.item)}
      horizontal
    />
  );
}
