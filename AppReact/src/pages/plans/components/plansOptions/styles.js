import {Text} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../res/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  margin-top: 40px;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 2,
})`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;
