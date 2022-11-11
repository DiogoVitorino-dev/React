import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';


const sizeContainer=100

export const Container = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: ${sizeContainer}px;
    background-color: #00000050;
    padding: 10px;
    margin: 10px 0;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-color: #ffffff30;
`

export const Artwork = styled.Image`
    width: ${Math.round((sizeContainer / 1.3))}px;
    height: ${Math.round((sizeContainer / 1.3))}px;
    border-width: 1px;
    border-color: #fff;
`

export const ContainerText = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 15px;
`

export const TextArtist = styled.Text`
    font-family: 'sans-serif';
    font-weight: 200;
    font-size: 14px;
    color: #fff;
`

export const TextTitle = styled.Text`
    font-family: 'sans-serif';
    font-weight: bold;
    font-size: 14px;
    color: #fff;
`