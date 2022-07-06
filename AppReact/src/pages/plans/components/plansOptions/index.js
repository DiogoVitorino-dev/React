import React from 'react';
import Colors from '../../../../res/colors';
import Item from './components/item';
import {Container, Title} from './styles';

export default function PlansOptions() {
  return (
    <Container>
      <Title>Escolha seu plano Premium</Title>
      <Item
        startGradient={Colors.background.gradient.blue.startGradient}
        endGradient={Colors.background.gradient.blue.endGradient}
      />
    </Container>
  );
}
