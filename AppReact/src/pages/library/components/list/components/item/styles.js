import {Text} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../../res/colors';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
  margin: 10px 0;
`;

export const ItemImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.font.PrimaryLight};
`;

export const Author = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  color: ${Colors.font.PrimaryDark};
`;
