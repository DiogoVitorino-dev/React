import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../../res/colors';

export const Touchable = styled(TouchableOpacity)`
  max-width: 40%;
`;

export const ItemContainer = styled.View`
  display: flex;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  overflow: hidden;
  align-content: stretch;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: ${Colors.background.solid.primaryLight1Alpha};
`;

export const ItemImage = styled.Image`
  max-width: 50px;
  max-height: 50px;
`;

export const ItemTextContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  border-width: 2px;
  border-color: #00000008;
`;

export const ItemText = styled(Text).attrs({
  numberOfLines: 2,
})`
  width: 70px;
  color: ${Colors.font.PrimaryLight};
  font-weight: bold;
  margin: 0 5px;
  text-align: left;
`;
