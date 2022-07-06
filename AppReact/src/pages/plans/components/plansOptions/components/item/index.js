import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import PayOptions from './components/payOptions';
import {Container} from './styles';

export default function Item({startGradient, endGradient}) {
  return (
    <Container colors={[startGradient, endGradient]}>
      <Header />
      <PayOptions />
      <Footer />
    </Container>
  );
}
