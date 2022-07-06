import React from 'react';
import FavoriteGenres from './components/favoriteGenres';
import OthersGenres from './components/othersGenres';
import SearchBar from './components/searchBar';
import {Container} from './styles';

export default function SearchScreen() {
  return (
    <Container>
      <SearchBar />
      <FavoriteGenres />
      <OthersGenres />
    </Container>
  );
}
