import React from "react";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import ItemList from "./itemList";

export default function List(){
    const [listMusic,setListMusic] = useState([])

    useEffect(()=>{
        let aux=[]
        for (let index = 0; index < 10; index++) {
            aux.push({
                title:'lift',
                artist:'Conor Ross',
                artwork:require('../../../assert/artwork.jpg'),
            })
        }
        setListMusic(aux)
    },[])

    return(
        <Container>
            <FlatList
            data={listMusic}
            renderItem={({item})=>ItemList(item)}
            />
        </Container>
    )
}