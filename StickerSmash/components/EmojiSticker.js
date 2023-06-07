import React from 'react';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Image, View } from 'react-native';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';

const workaroundReanimatedBugWeb = () => {
    if (window._frameTimestamp === undefined) window._frameTimestamp = null;  
}

export default function EmojiSticker({imageSize, stickerSource}) {
    const scaleImage = useSharedValue(imageSize)
    const translate = useSharedValue({x:0, y:0})
    const startTranslate = useSharedValue({x:0, y:0})

    const onDoubleTap = useAnimatedGestureHandler({
        onActive:() => {
            if (scaleImage.value !== imageSize * 2)
                scaleImage.value = imageSize * 2 
        }
    })

    const imageStyle = useAnimatedStyle(()=>({
        width: withSpring(scaleImage.value),
        height: withSpring(scaleImage.value),
    }))

    const onDrag = useAnimatedGestureHandler({       
        onActive:({translationX,translationY}) => {
            translate.value = {
                x: translationX + startTranslate.value.x,
                y: translationY + startTranslate.value.y,
            }            
        },
        onEnd:() => {
            startTranslate.value = {
                x: translate.value.x,
                y: translate.value.y,
            }
        }
    })

    const containerStyle = useAnimatedStyle(() => ({
        transform:[
            {
                translateX:withSpring(translate.value.x)
            },
            {
                translateY:withSpring(translate.value.y)
            },
        ]
    }))

    workaroundReanimatedBugWeb()

    return(
        <PanGestureHandler onGestureEvent={onDrag}>
            <Animated.View style={[containerStyle,{top:-350}]}>
                <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
                    <Animated.Image 
                    source={stickerSource} 
                    resizeMode='contain' 
                    style={[imageStyle,{width:imageSize, height:imageSize}]} />
                </TapGestureHandler> 
            </Animated.View>
        </PanGestureHandler>
    )
};
