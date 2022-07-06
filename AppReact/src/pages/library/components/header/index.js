import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../res/colors';
import {
  Container,
  ContainerIconUser,
  ContainerUser,
  Touchable,
  TextIconUser,
  Title,
  ContainerIcons,
} from './styles';

export default function Header() {
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
    <Container>
      <ContainerUser>
        <Touchable>
          <ContainerIconUser colorRandom={colorBG}>
            <TextIconUser>D</TextIconUser>
          </ContainerIconUser>
        </Touchable>
        <Title>sua biblioteca</Title>
      </ContainerUser>
      <ContainerIcons>
        <Touchable>
          <Icon name="search" size={30} color={Colors.font.PrimaryLight} />
        </Touchable>
        <Touchable>
          <Icon name="add" size={30} color={Colors.font.PrimaryLight} />
        </Touchable>
      </ContainerIcons>
    </Container>
  );
}
