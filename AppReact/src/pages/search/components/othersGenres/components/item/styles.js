import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../../../../../res/colors';

export const Touchable = styled(TouchableOpacity)`
  display: flex;
  flex: 1;
`;

export const Container = styled.View`
  display: flex;
  height: 90px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 5px;
  align-items: flex-start;
  margin: 0 10px;
  overflow: hidden;
  background-color: ${props => props.colorRandom};
`;

export const ItemImage = styled.Image`
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: 5px;
  left: 15px;
  top: 25px;
`;

export const Title = styled(Text).attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bold;
  color: ${Colors.font.PrimaryLight};
`;
