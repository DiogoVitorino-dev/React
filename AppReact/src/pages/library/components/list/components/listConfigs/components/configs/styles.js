import {Text, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../../../../res/colors';

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 10px 0;
`;

export const Touchable = styled(TouchableWithoutFeedback)``;

export const ContainerOrder = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const TextTypeOrder = styled(Text).attrs({
  numberOfLines: 1,
})`
  margin-left: 10px;
  font-size: 14px;
  color: ${Colors.font.PrimaryLight};
`;
