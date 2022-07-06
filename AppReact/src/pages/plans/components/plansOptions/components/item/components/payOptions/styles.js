import styled from 'styled-components/native';
import {Text, TouchableOpacity} from 'react-native';
import Colors from '../../../../../../../../res/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  margin-top: 40px;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 3,
})`
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  color: ${Colors.font.PrimaryLight};
`;

export const Touchable = styled(TouchableOpacity)``;

export const ContainerTouchable = styled.View`
  display: flex;
  height: 40px;
  margin-top: 20px;
  margin-left: ${props => props.size}px;
  margin-right: ${props => props.size}px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${Colors.background.solid.primaryLight3};
`;

export const TitleTouchable = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  text-transform: uppercase;
  color: ${Colors.font.PrimaryDark2};
`;
