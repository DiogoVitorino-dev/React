import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../../../res/colors';
import {Container, Description, TextContainer} from './styles';

export default function Item({text}) {
  return (
    <Container>
      <Icon name="check" size={30} color={Colors.icons.green.primarylight} />
      <TextContainer>
        <Description>{text}</Description>
      </TextContainer>
    </Container>
  );
}
