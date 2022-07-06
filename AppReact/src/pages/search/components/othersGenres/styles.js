import {Text} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../res/colors';

export const Container = styled.View`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: column;
`;

export const ItemContainer = styled.View`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  margin-left: 10px;
  color: ${Colors.font.PrimaryLight};
  font-weight: 600;
`;
