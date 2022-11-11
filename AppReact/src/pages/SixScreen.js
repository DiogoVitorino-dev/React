import React, {useMemo, useState} from 'react';
import Animated, {
  Easing,
  Extrapolate,
  FadeInDown,
  FadeInUp,
  interpolate,
  Layout,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Button, Text, useWindowDimensions, View} from 'react-native';

export default function SixScreen() {
  const [list, setList] = useState(new Array(60));

  const size = useSharedValue(50);
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const red = useSharedValue(0);
  const green = useSharedValue(0);
  const blue = useSharedValue(0);

  const scrollY = useSharedValue(0);

  const AnimatedStyles = useAnimatedStyle(() => {
    const r = interpolate(red.value, [0, 500], [0, 255], Extrapolate.CLAMP);
    const g = interpolate(green.value, [0, 500], [0, 255], Extrapolate.CLAMP);
    const b = interpolate(blue.value, [0, 500], [0, 255], Extrapolate.CLAMP);

    return {
      width: withSpring(size.value),
      height: withSpring(size.value),
      backgroundColor: `rgb(${r},${g},${b})`,
      transform: [
        {translateX: withSpring(x.value)},
        {translateY: withSpring(y.value)},
      ],
    };
  });

  const addRandomItemList = () =>
    setList(prev => prev.concat([{title: `item 2`}]));

  const HeaderList = useMemo(
    () => (
      <View style={{width: 90}}>
        <Button title="Add item" onPress={() => addRandomItemList()} />
      </View>
    ),
    [],
  );
  const AnimatedScroll = useAnimatedScrollHandler(event => {
    scrollY.value = interpolate(
      Math.floor(event.contentOffset.y),
      [0, 1900],
      [0, 255],
      Extrapolate.CLAMP,
    );
  });

  const AnimatedItemList = useAnimatedStyle(() => ({
    backgroundColor: `rgb(212, 125, ${scrollY.value})`,
  }));

  const {height} = useWindowDimensions();
  const circleSize = useSharedValue(0);
  const circleOpacity = useSharedValue(0);

  const AnimatedCircle = useAnimatedStyle(() => ({
    width: circleSize.value,
    height: circleSize.value,
    opacity: circleOpacity.value,
  }));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Animated.View
        style={[
          {
            backgroundColor: 'black',
            borderRadius: 500,
            position: 'absolute',
          },
          AnimatedCircle,
        ]}
      />
      <Animated.View
        style={[
          {width: 50, height: 50, backgroundColor: 'purple'},
          AnimatedStyles,
        ]}
      />

      <View style={{width: 90, marginTop: 60}}>
        <Button
          title="anim"
          onPress={() => {
            // size.value = Math.floor(Math.random() * 255);

            circleOpacity.value = 100;
            circleSize.value = withTiming(
              height + 150,
              {
                duration: 500,
                easing: Easing.bezier(0.29, 0.39, 0.59, 0.99),
              },
              f => {
                if (f) circleOpacity.value = 0;
              },
            );

            red.value = withSpring(125);
            blue.value = withSpring(255);
            green.value = withSpring(25);

            setInterval(() => {
              x.value = withSequence(
                withTiming(100, {duration: 1000}),
                withDelay(1000, withTiming(0, {duration: 1000})),
              );
              y.value = withSequence(
                withDelay(1000, withTiming(-100, {duration: 1000})),
                withDelay(1000, withTiming(0, {duration: 1000})),
              );
            }, 8000);
          }}
        />
      </View>

      <Animated.FlatList
        style={{marginTop: 40}}
        data={list}
        renderItem={({index}) => (
          <Animated.View
            layout={Layout.duration(200).delay(200)}
            entering={FadeInUp}
            exiting={FadeInDown}
            style={[
              {
                width: 200,
                height: 50,
                margin: 5,
              },
              AnimatedItemList,
            ]}>
            <Text style={{color: 'black'}}>{index}</Text>
          </Animated.View>
        )}
        ListHeaderComponent={HeaderList}
        onScroll={AnimatedScroll}
      />
    </View>
  );
}
