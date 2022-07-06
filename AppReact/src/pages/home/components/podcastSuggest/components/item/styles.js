import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../../res/colors';

export const Container = styled.View`
  display: flex;
  max-width: 140px;
  margin: 0 10px;
  flex-direction: column;
`;

export const Touchable = styled(TouchableOpacity)``;

export const ItemImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 20px;
`;

export const ItemTitleText = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
  margin-top: 5px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;

export const ItemAuthorText = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
  margin-top: 5px;
  color: ${Colors.font.PrimaryDark};
`;
