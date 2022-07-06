import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native';
import Colors from '../../res/colors';

export const Background = styled(LinearGradient).attrs({
  colors: [
    Colors.background.gradient.gray.startGradient,
    Colors.background.gradient.gray.endGradient,
  ],
  useAngle: true,
  angle: 130,
  angleCenter: {x: 0.1, y: 0.1},
  locations: [0, 0.8],
})`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Container = styled(ScrollView)`
  display: flex;
  flex: 1;
`;
