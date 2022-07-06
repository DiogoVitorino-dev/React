import {Text} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../res/colors';

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 5px;
  margin: 0 20px;
  margin-top: 40px;
  padding: 20px;
  background-color: ${Colors.background.solid.primaryLight1Alpha};
`;

export const PlanText = styled(Text).attrs({
  numberOflines: 1,
})`
  font-size: 16px;
  color: ${Colors.font.PrimaryLight};
  font-weight: bold;
`;

export const DescriptionText = styled(Text).attrs({
  numberOflines: 1,
})`
  font-size: 12px;
  color: ${Colors.font.PrimaryDark};
`;
