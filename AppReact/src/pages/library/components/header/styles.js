import {Text, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../res/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  margin-top: 40px;
`;

export const ContainerUser = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
`;

export const Touchable = styled(TouchableWithoutFeedback)``;

export const Title = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  text-transform: capitalize;
  color: ${Colors.font.PrimaryLight};
`;

export const ContainerIconUser = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => props.colorRandom};
`;

export const TextIconUser = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: 'clip',
})`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.font.PrimaryDark2};
`;

export const ContainerIcons = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;
