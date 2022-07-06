import React from 'react';
import BenefitsPlan from './components/benefitsPlan';
import CurrentPlan from './components/currentPlan';
import Header from './components/header';
import PlansOptions from './components/plansOptions';
import {Container} from './styles';

export default function PlansScreen() {
  return (
    <Container>
      <Header />
      <BenefitsPlan />
      <CurrentPlan />
      <PlansOptions />
    </Container>
  );
}
