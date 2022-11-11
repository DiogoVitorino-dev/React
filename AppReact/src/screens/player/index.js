import React from "react";
import BottomPlayer from "./bottomPlayer";
import {Artwork, Container, ContainerText, TextArtist, TextTitle, ContainerArtwork} from './styles'



export default function Player(){
    return(
        <Container>
            <ContainerArtwork>
                <Artwork source={require('../../assert/artwork.jpg')}/>
            </ContainerArtwork>

            <ContainerText>
                <TextTitle>Lift</TextTitle>
                <TextArtist>Conor Ross</TextArtist>
            </ContainerText>

            <BottomPlayer/>

        </Container>
    )
}