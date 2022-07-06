import React from 'react';
import {ContainerDescription, TextLinked, TextDescription} from './styles';

export default function Footer() {
  return (
    <ContainerDescription>
      <TextDescription>
        Depois, apenas R$ 19,90 / mês. Oferta válida apenas para usuarios novos
        do Premium. Cancele qunado quiser.
      </TextDescription>
      <TextLinked>Sujeito a termos.</TextLinked>
    </ContainerDescription>
  );
}
