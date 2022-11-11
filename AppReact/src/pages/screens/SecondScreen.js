import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { GestureDetector, Gesture,GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

function Menu() {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const {width,height} = useWindowDimensions()



  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { scale:1 + offset.value.y/10},
      ],
      height:(height/4) + offset.value.y,
      backgroundColor: isPressed.value ? '#1F4037' : '#255657',
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      fontSize:24 + (offset.value.y/2),
    };
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onChange((e) => {
      let valueY=offset.value.y
      let changedValue = e.changeY + offset.value.y

      if( changedValue <= 200 && changedValue >= 10)
        valueY=e.changeY + offset.value.y

      offset.value = {
        x: e.changeX + offset.value.x,
        y: valueY,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[{
        width:width,
        height:height/4,
        borderBottomLeftRadius:200,
        borderBottomRightRadius:200,
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'column',
        paddingBottom: 15,
        },
        animatedStyles]}>
        <Animated.Text style={[animatedText]}>Opa</Animated.Text>
        </Animated.View>

    </GestureDetector>
  );
}

export default function Example() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Menu />
      </View>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});