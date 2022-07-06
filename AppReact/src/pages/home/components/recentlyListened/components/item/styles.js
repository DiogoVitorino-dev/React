import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../../res/colors';

export const Container = styled.View`
  display: flex;
  max-width: 100px;
  margin: 0 10px;
  flex-direction: column;
`;

export const Touchable = styled(TouchableOpacity)``;

export const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ItemTitleText = styled(Text).attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
  margin-top: 5px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;
