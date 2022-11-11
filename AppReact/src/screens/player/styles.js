import styled from "styled-components/native";
import {Dimensions}  from 'react-native';
import { LinearGradient } from "react-native-svg";

let curveSize=500
let h=Math.round((Dimensions.get('window').height + curveSize))

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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

export const ContainerArtwork = styled.View`
display: flex;
justify-content: center;
align-items: center;
flex: 1;
margin-top: 60px;
`

export const Artwork = styled.Image`
    width: 300px;
    height: 300px;
    max-width: 500px;
    max-height: 500px;
`;

export const ContainerText = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    margin: 20px 0;
`;

export const TextTitle = styled.Text`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #ECECEC;
`;

export const TextArtist = styled.Text`
    font-family: sans-serif;
    font-weight: 200;
    font-size: 20px;
    color: #ECECEC;
`;