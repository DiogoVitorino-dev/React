import React from 'react';
import {
  Container,
  ContainerTouchable,
  Touchable,
  Title,
  TitleTouchable,
} from './styles';

export default function PayOptions() {
  return (
    <Container>
      <Title>Primeiro mês gratis com assinatura . Conta Premium</Title>
      <Touchable>
        <ContainerTouchable size={10}>
          <TitleTouchable>plano de assinatura</TitleTouchable>
        </ContainerTouchable>
      </Touchable>
      <Touchable>
        <ContainerTouchable size={30}>
          <TitleTouchable>pré pago</TitleTouchable>
        </ContainerTouchable>
      </Touchable>
    </Container>
  );
}
