import styled from 'styled-components/native';
import {Text} from 'react-native';
import Colors from '../../../../../../../../res/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const TextPlan = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;

export const ContainerPrice = styled.View`
  display: flex;
  flex-direction: column;
`;

export const TextPrice = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;
export const TextPriceDescription = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  text-transform: uppercase;
  color: ${Colors.font.PrimaryLight};
`;
