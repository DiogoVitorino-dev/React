import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function SevenScreen() {
  const offset = useSharedValue({x: 0, y: 0});
  const scale = useSharedValue(1);
  const start = useSharedValue({x: 0, y: 0});

  const {height, width} = useWindowDimensions();

  const AnimatedCircle = useAnimatedStyle(() => ({
    transform: [
      {translateX: withSpring(offset.value.x)},
      {translateY: offset.value.y},
      {scale: scale.value},
    ],
  }));

  const gesturePan = Gesture.Pan().onUpdate(ev => {
    console.log('x', ev.absoluteX);
    console.log('y', ev.absoluteY);
    offset.value = {
      x: ev.translationX + start.value.x,
      y: ev.translationY + start.value.y,
    };
  });

  const gestureLong = Gesture.LongPress()
    .onStart(() => {
      scale.value = withSpring(1.5);
    })
    .onFinalize(() => {
      scale.value = withSpring(1);
    });

  const compose = Gesture.Simultaneous(gesturePan, gestureLong);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
        }}>
        <GestureDetector gesture={compose}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                backgroundColor: 'white',
                borderRadius: 50,
                position: 'absolute',
                zIndex: 1,
              },
              AnimatedCircle,
            ]}
          />
        </GestureDetector>
        <View
          style={{
            width: width / 2,
            height: height / 2,
            backgroundColor: '#1e3c72',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              borderRadius: 50,
              zIndex: 1,
            }}
          />
        </View>
        <View
          style={{
            width: width / 2,
            height: height / 2,
            backgroundColor: '#283E51',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              borderRadius: 50,
              zIndex: 1,
            }}
          />
        </View>
        <View
          style={{
            width: width / 2,
            height: height / 2,
            backgroundColor: '#2a5298',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              borderRadius: 50,
              zIndex: 1,
            }}
          />
        </View>
        <View
          style={{
            width: width / 2,
            height: height / 2,
            backgroundColor: '#4B79A1',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              borderRadius: 50,
              zIndex: 1,
            }}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
