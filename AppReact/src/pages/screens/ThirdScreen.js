import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button,Text,View } from "react-native";

const BB=({...props})=>{
    useEffect(()=>{
        console.log("BB re render")        
    })

    useEffect(()=>{
        console.log("BB onclick re render")        
    },[props["onPress"]])
    return(
        <Button {...props}/>
    )
}

export default function FirstScreen({navigation}){
    const [count,setCount]=useState(0)  

    useEffect(()=>{
        console.log("re render")
    })

    return(
        <View style={{width:"100%",height:"100%",display:"flex"}}>
            <View style={{alignSelf:"flex-end"}}>
                <Button
                    title="back"
                    onPress={()=>navigation.goBack()}
                />
            </View>

            <View>
                <Text style={{fontSize:24,textAlign:"center"}}>{count}</Text>
                <BB title="increment" onPress={useCallback(()=>setCount(prev=>prev+1),[])}/>{/* retirar o useCallback para perceber o nao acionamento do log*/}      
            </View>
            
        </View>
        
    )
}