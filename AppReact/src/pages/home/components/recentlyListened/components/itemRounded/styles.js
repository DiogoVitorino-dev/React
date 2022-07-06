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
  border-radius: 50px;
`;

export const ItemAuthorText = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;
