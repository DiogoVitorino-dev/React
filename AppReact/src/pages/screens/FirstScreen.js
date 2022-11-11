import React from "react";
import { Button,View } from "react-native";

export default function FirstScreen({navigation}){
    return(
        <View>
            <Button
                title="Second"
                onPress={()=>navigation.navigate("SecondScreen")}
            />
            <Button
                title="Third"
                onPress={()=>navigation.navigate("ThirdScreen")}
            />
        </View>
        
    )
}