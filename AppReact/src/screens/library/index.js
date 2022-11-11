import React, { useEffect, useMemo, useState } from 'react';
import { Animated } from 'react-native';
import BottomPlayer from './bottomPlayer';
import List from './list';
import {Container, Background} from './styles';

export default function Home({navigation}) {


  return (
    <Container >
      <Background
      colors={['#97A9C420', '#00000000']}
      start={{x: 0, y: 0.5}} end={{x: 0.3, y: 0.5}}
      />
      <List/>
      <BottomPlayer/>
    </Container>
  );
}
