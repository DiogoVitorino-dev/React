import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../res/colors';
import {Container, ContainerIcons, TitleText, Touchable} from './styles';

export default function Header() {
  return (
    <Container>
      <TitleText>Bom dia</TitleText>
      <ContainerIcons>
        <Touchable>
          <Icon
            name="notifications"
            size={30}
            color={Colors.icons.PrimaryLight}
          />
        </Touchable>
        <Touchable>
          <Icon name="schedule" size={30} color={Colors.icons.PrimaryLight} />
        </Touchable>
        <Touchable>
          <Icon name="settings" size={30} color={Colors.icons.PrimaryLight} />
        </Touchable>
      </ContainerIcons>
    </Container>
  );
}
