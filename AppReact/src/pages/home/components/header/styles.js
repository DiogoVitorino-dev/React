import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../res/colors';

export const Container = styled.View`
  display: flex;
  width: 100%;
  padding: 0 20px;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const ContainerIcons = styled.View`
  display: flex;
  width: 40%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const Touchable = styled(TouchableOpacity)`
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${Colors.font.PrimaryLight};
  font-weight: bold;
  text-align: center;
  font-size: 26px;
`;
