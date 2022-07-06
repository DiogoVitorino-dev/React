import React from 'react';
import {
  Container,
  ContainerPrice,
  TextPlan,
  TextPrice,
  TextPriceDescription,
} from './styles';

export default function Header() {
  return (
    <Container>
      <TextPlan>Premium Individual</TextPlan>
      <ContainerPrice>
        <TextPrice>R$ 19,90</TextPrice>
        <TextPriceDescription>a partir de/mês</TextPriceDescription>
      </ContainerPrice>
    </Container>
  );
}
