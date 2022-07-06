import {Text, TouchableWithoutFeedback} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import Colors from '../../../../../../../../../../res/colors';

export const Touchable = styled(TouchableWithoutFeedback)``;

export const ContainerTouchable = styled(Animated.View)`
  display: flex;
  width: 80px;
  height: 40px;
  margin: 10px;
  margin-left: 0px;
  border-width: 1px;
  border-color: #e0e0e0;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const TextTouchable = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
  color: ${Colors.font.PrimaryLight};
`;
