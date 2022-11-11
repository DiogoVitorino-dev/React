import styled from "styled-components/native";

export const Container = styled.View`
display: flex;
flex-direction: column;
width: 100%;
background-color: #00000030;
`

export const ContainerTimes = styled.View`
display: flex;
width: 100%;
justify-content: space-between;
flex-direction: row;
padding: 10px;
`

export const TextTimes = styled.Text`
font-family: sans-serif;
font-size: 16px;
color: #ECECEC;
`

export const ContainerController = styled.View`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
`
export const TouchableIcon = styled.TouchableHighlight`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin: 10px 0;
`

