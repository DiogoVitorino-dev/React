import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../res/colors';

export const Container = styled(ScrollView)`
  display: flex;
  background-color: ${Colors.background.solid.primaryLight2};
`;
