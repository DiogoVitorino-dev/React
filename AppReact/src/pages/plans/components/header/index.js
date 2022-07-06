import React from 'react';
import {
  Container,
  ContainerButton,
  ContainerDescription,
  TextButton,
  TextDescription,
  TextLinked,
  Title,
  Touchable,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Title>Experimente o Premium de graça por 1 mês</Title>
      <Touchable>
        <ContainerButton>
          <TextButton>SEJA PREMIUM</TextButton>
        </ContainerButton>
      </Touchable>
      <ContainerDescription>
        <TextDescription>
          Depois, apenas R$ 19,90/mês. Oferta válida apenas para usuários novos
          do Premium.
        </TextDescription>
        <TextLinked>Sujeito a termos.</TextLinked>
      </ContainerDescription>
    </Container>
  );
}
