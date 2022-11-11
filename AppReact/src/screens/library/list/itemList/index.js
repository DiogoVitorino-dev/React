import React from "react";
import {Container,Artwork,ContainerText,TextTitle,TextArtist} from './styles'

export default function ItemList(item){

    return(
        <Container>
            <Artwork source={item.artwork} />
            <ContainerText>
                <TextTitle>{item.title}</TextTitle>
                <TextArtist>{item.artist}</TextArtist>
            </ContainerText>
        </Container>
    )
}