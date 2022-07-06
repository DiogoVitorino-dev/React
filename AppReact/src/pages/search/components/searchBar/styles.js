import {Text, TextInput} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../res/colors';

export const Container = styled.View`
  display: flex;
  margin: 0 20px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
  background-color: ${Colors.background.solid.primaryLight3};
`;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: Colors.icons.PrimaryDark,
})`
  font-size: 16px;
  height: 40px;
  flex-grow: 2;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 1,
})`
  color: ${Colors.font.PrimaryLight};
  margin-top: 40px;
  font-size: 22px;
  font-weight: bold;
`;
