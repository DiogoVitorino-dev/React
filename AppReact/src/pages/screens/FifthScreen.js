import React, {  useEffect } from "react";
import {StyleSheet,View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from "react-native-reanimated";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    box:{
        width: 100,
        height: 100,
        backgroundColor:'tomato'

    }
})

export default function FifthScreen(){
    const posY = useSharedValue(0)
    const posX = useSharedValue(0)
    const panHandler = useAnimatedGestureHandler({
        onStart(ev,context) {
            context.posY = posY.value
            context.posX = posX.value
        },
        onActive(ev,context) {
            posX.value = context.posX + ev.translationX
            posY.value = context.posY + ev.translationY
        },
        onFinish() {
            posX.value= withSpring(0)
            posY.value= withSpring(0)

        },
    })



    const posStyle = useAnimatedStyle(()=>{
        return {
            transform: [
                {translateX:posX.value},
                {translateY:posY.value}
            ]
        }
    })

    return(
        <GestureHandlerRootView style={[styles.container]}>
            <PanGestureHandler onGestureEvent={panHandler}>
                <Animated.View style={[styles.box ,posStyle]}/>
            </PanGestureHandler>
        </GestureHandlerRootView>
    )
}