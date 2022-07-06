import {FlatList, Text} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../res/colors';

export const List = styled(FlatList)`
  margin-top: 10px;
  margin-left: 10px;
`;

export const Container = styled.View`
  margin-top: 20px;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 20px;
  margin: 0 20px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;
