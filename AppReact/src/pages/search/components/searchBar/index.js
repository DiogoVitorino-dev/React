import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../res/colors';
import {Container, Input, InputContainer, Title} from './styles';

export default function SearchBar() {
  return (
    <Container>
      <Title>Busca</Title>
      <InputContainer>
        <Icon name="search" size={40} color={Colors.icons.PrimaryDark} />
        <Input placeholder="Artistas, músicas ou podcasts" />
      </InputContainer>
    </Container>
  );
}
