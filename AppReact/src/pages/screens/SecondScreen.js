import React, { useReducer } from "react";
import { Button,Text,TouchableHighlight,View } from "react-native"

 const Init={
     nome:"default",
     wins:0
 }


function reducer(state,action){
    switch (action["type"]) {
        case "UPDATE_PLAYER":
            const newState={...state}
            newState["nome"]=action["payload"]["nome"]
            newState["wins"]=action["payload"]["wins"]
            return newState
    
        default:
            return state
    }

}


export default function SecondScreen({navigation}){ 
    const [state, dispatch] = useReducer(reducer, Init)
    console.log(state)
    return(
        <View>
            <TouchableHighlight 
            onPress={()=>dispatch({type:"UPDATE_PLAYER",
            payload:{nome:"Ronaldo",wins:22}})}>
                <View style={{width:100,height:100,backgroundColor:"tomato"}}>
                    <Text>Nome: {state["nome"]}</Text>
                    <Text>Vitorias: {state["wins"]}</Text>
                </View>

            </TouchableHighlight>
            <Button
                title="back"
                onPress={()=>navigation.goBack()}
            />
        </View>
        
    )
}