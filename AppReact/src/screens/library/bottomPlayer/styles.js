import styled from 'styled-components/native';
import PlayIcon from '../../../assert/PlayIcon';
import NextIcon from "../../../assert/NextIcon";
import React from 'react';


const sizeContainer=100

export const Container = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: ${sizeContainer}px;
    background-color: #00000030;
    padding: 10px;
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
    font-weight: 600;
    font-size: 14px;
    color: #fff;
`

export const TextTitle = styled.Text`
    font-family: 'sans-serif';
    font-weight: 400;
    font-size: 14px;
    color: #fff;
`

export const ContainerIcon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex: 1;
`

export const TouchableIcon = styled.TouchableWithoutFeedback`
    width: ${sizeContainer / 3}px;
    height: ${sizeContainer / 3}px;
    background-color: brown;
    margin: 0 20px;
`

export const IconPlay = styled(() => <PlayIcon size={sizeContainer / 3} />)``

export const IconNext = styled(() => <NextIcon size={sizeContainer / 4} />)``
