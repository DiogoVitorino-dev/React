import React, {useEffect, useState} from 'react';
import Colors from '../../../../../../res/colors';
import {Container, ItemImage, Title, Touchable} from './styles';

export default function Item({ImageSRC}) {
  const [colorBG, setColorBG] = useState('');
  useEffect(() => {
    const num = Math.floor(Math.random() * 10);

    if (num <= 3) {
      setColorBG(Colors.background.solid.random.colorRandom1);
    } else if (num > 6) {
      setColorBG(Colors.background.solid.random.colorRandom2);
    } else setColorBG(Colors.background.solid.random.colorRandom3);
  }, []);
  return (
    <Touchable>
      <Container colorRandom={colorBG}>
        <Title>Pop</Title>
        <ItemImage source={ImageSRC} style={{transform: [{rotate: '30deg'}]}} />
      </Container>
    </Touchable>
  );
}
