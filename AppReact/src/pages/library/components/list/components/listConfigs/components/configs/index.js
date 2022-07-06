import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../../../../../res/colors';
import {Container, ContainerOrder, TextTypeOrder, Touchable} from './styles';

export default function ListConfigs() {
  return (
    <Container>
      <Touchable>
        <ContainerOrder>
          <Icon name="swap-vert" size={20} color={Colors.icons.PrimaryLight} />
          <TextTypeOrder>Mais recentes</TextTypeOrder>
        </ContainerOrder>
      </Touchable>
      <Touchable>
        <Icon name="grid-view" size={20} color={Colors.icons.PrimaryLight} />
      </Touchable>
    </Container>
  );
}
