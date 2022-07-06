import {Text} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../res/colors';

export const Container = styled.View`
  display: flex;
  flex: 1;
  margin: 0 20px;
  padding: 20px 0px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: ${Colors.background.solid.primaryLight1Alpha};
`;

export const Header = styled.View`
  display: flex;
  border-bottom-width: 2px;
  border-bottom-color: #a6a6a61a;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 2,
})`
  font-size: 18px;
  margin: 20px;
  margin-bottom: 10px;

  font-weight: bold;

  color: ${Colors.font.PrimaryLight};
`;
