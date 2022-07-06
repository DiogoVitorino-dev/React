import {Text} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../../../../res/colors';

export const ContainerDescription = styled.Text`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: flex-start;
`;

export const TextDescription = styled(Text).attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
  color: ${Colors.font.PrimaryLight};
`;

export const TextLinked = styled(Text).attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;
