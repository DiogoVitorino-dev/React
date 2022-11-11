import { Container, ContainerController, ContainerTimes, TextTimes, TouchableIcon } from "./styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from "react";


export default function BottomPlayer(){
    const [sizeContainer,setSizeContainer]=useState(0)

    function onLayout(event){
        setSizeContainer(Math.round(event.nativeEvent.layout.height / 3.5))
    }

    return(
        <Container onLayout={onLayout}>

            <ContainerTimes>
                <TextTimes>0:21</TextTimes>
                <TextTimes>3:57</TextTimes>
            </ContainerTimes>

            <ContainerController>
                <TouchableIcon size={sizeContainer}>
                    <Icon name="repeat" size={sizeContainer} color='#fff' />
                </TouchableIcon>

                <TouchableIcon size={sizeContainer}>
                    <Icon name="skip-previous" size={sizeContainer} color='#fff'/>
                </TouchableIcon>

                <TouchableIcon size={sizeContainer + 10}>
                    <Icon name="play-circle-filled" size={sizeContainer + 10} color='#fff'/>
                </TouchableIcon>

                <TouchableIcon size={sizeContainer}>
                    <Icon name="skip-next" size={sizeContainer} color='#fff'/>
                </TouchableIcon>

                <TouchableIcon size={sizeContainer}>
                    <Icon name="shuffle" size={sizeContainer} color='#fff'/>
                </TouchableIcon>

            </ContainerController>
        </Container>
    )
}