import React from "react";
import { Container,Artwork,ContainerText,TextArtist,TextTitle,ContainerIcon,TouchableIcon,IconPlay,IconNext } from "./styles";

export default function BottomPlayer(){
    return(
        <Container>
            <Artwork source={require('../../../assert/artwork.jpg')} />
            <ContainerText>
                <TextTitle>Lift</TextTitle>
                <TextArtist>Conor Ross</TextArtist>
            </ContainerText>
            <ContainerIcon>
                <TouchableIcon onPress={()=>console.log('a')}>
                    <IconPlay/>
                </TouchableIcon>
                <TouchableIcon onPress={()=>console.log('a')}>
                    <IconNext/>
                </TouchableIcon>
            </ContainerIcon>
        </Container>
    )
}