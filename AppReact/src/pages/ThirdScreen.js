import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'tomato',
    fontWeight: 'bold',
    fontSize: 22,
  },

  box: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  },
});

export default function ThirdScreen() {
  const boxPosX = useSharedValue(0);
  const boxPosY = useSharedValue(0);

  const boxStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: boxPosX.value,
      },
      {
        scale: interpolate(boxPosX.value, [0, 100], [1, 2], Extrapolate.CLAMP),
      },
      {
        translateY: boxPosY.value,
      },
    ],
  }));

  useEffect(() => {
    setTimeout(() => {
      boxPosX.value = withTiming(
        100,
        {
          duration: 500,
          easing: Easing.bounce,
        },
        () => {
          boxPosY.value = withDelay(
            500,
            withTiming(-100, {
              duration: 500,
              easing: Easing.bounce,
            }),
          );
        },
      );
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, boxStyles]} />
    </View>
  );
}

// useSharedValue - amarzenar um valor da animação
// useAnimatedStyle - criar um estilo apartir de um valor (useSharedValue)
// useDerivedValue - Lembra da animação que conforme a bola crescia o texto crescia proporcionalmente, então, ele pega um sharedValue e faz calculos com ele exemplo: valor original/2 -> vai para -> nova variavel
