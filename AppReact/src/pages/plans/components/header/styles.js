import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../res/colors';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const Touchable = styled(TouchableOpacity)`
  width: 100%;
`;

export const ContainerButton = styled.View`
  display: flex;
  margin-top: 40px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${Colors.background.solid.primaryLight3};
`;

export const ContainerDescription = styled.Text`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2px;
  justify-content: flex-start;
`;

export const TextButton = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.font.PrimaryDark2};
`;

export const Title = styled(Text).attrs({
  numberOfLines: 2,
})`
  margin: 0 10px;
  margin-top: 40px;
  font-size: 22px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;

export const TextDescription = styled(Text).attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
  color: ${Colors.font.PrimaryDark};
`;

export const TextLinked = styled(Text).attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;
