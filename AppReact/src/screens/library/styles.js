import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions}  from 'react-native';

let curveSize=500
let h=Math.round((Dimensions.get('window').height + curveSize))

export const Container = styled.View`
  width: 100%;
  height: 100%; 
  flex-direction: column;
  justify-content: flex-end;
  background-color: #171819;
  overflow: hidden;
`;

export const Background = styled(LinearGradient)`
  width: ${h}px;
  height: ${h}px;
  border-radius: ${h}px;
  position: absolute;
  top: -${curveSize / 2}px;
  border-width: 1px;
  border-color: #fff;
  bottom: 0px;
  left: 50px;
`;

/*export const Background = styled(LinearGradient)`
  width: 100px;
  height: 100px;
  margin: auto;
`;*/
