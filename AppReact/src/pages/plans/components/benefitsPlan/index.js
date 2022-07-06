import React from 'react';
import Item from './components/item';
import {Container, Header, Title} from './styles';

export default function BenefitsPlan() {
  return (
    <Container>
      <Header>
        <Title>Por quer assinar o Premium?</Title>
      </Header>
      <Item text="Baixe para escutar no modo offline, sem usar Wi-Fi." />
      <Item text="Músicas sem interrupções de anúncios." />
      <Item text="Tenha a qualidade de som 2x mais alta do que no plano gratuito." />
      <Item text="Ouça músicas em qualquer ordem e pule quantas vezes quiser." />
      <Item text="Cancele planos mensais online a qualquer momento." />
    </Container>
  );
}
