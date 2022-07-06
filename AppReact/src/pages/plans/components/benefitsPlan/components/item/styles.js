import {Text} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../../res/colors';

export const Container = styled.View`
  display: flex;
  flex: 1;
  margin: 5px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextContainer = styled.View`
  display: flex;
  height: 40px;
  margin-left: 10px;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

export const Description = styled(Text).attrs({
  numberOfLines: 2,
})`
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: ${Colors.font.PrimaryLight};
`;
