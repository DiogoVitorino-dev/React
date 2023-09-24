import React, { useCallback } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Animated, {
	useSharedValue,
	withDelay,
	withRepeat,
	withSequence,
	withTiming,
} from "react-native-reanimated";

import Colors from "../constants/Colors";

const getRandomNumber = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min) + min);

export function AnimatedRects() {
	const { width, height } = useWindowDimensions();
	const scale = useSharedValue(1);
	const transX = useSharedValue(0);
	const transY = useSharedValue(0);

	const createAnimation = () => {
		transX.value = withRepeat(
			withTiming(getRandomNumber(100, 300), { duration: 60000 }),
			-1,
			true,
		);

		transY.value = withRepeat(
			withTiming(getRandomNumber(100, 300), { duration: 60000 }),
			-1,
			true,
		);

		scale.value = withRepeat(
			withDelay(
				300,
				withSequence(
					withTiming(1.1, { duration: 50 }),
					withTiming(1, { duration: 200 }),
				),
			),
			-1,
			true,
		);
	};

	const rect = (key: number) => {
		const w = getRandomNumber(50, 250);
		const h = getRandomNumber(50, 250);
		const x = getRandomNumber(0, width);
		const y = getRandomNumber(0, height);
		const rotate = getRandomNumber(20, 360);

		createAnimation();

		return (
			<Animated.View
				key={key}
				style={[
					styles.rect,
					{
						width: w,
						height: h,
						top: y,
						left: x,
						transform: [
							{ rotate: `${rotate}deg` },
							{ translateX: transX },
							{ translateY: transY },
							{ scale },
						],
					},
				]}
			/>
		);
	};

	const makeRects = useCallback(() => {
		const rects = [];
		for (let i = 0; i < 10; i++) rects.push(rect(i));

		return rects;
	}, []);

	return <View style={styles.container}>{makeRects()}</View>;
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		zIndex: -5,
		height: "100%",
		width: "100%",
	},

	rect: {
		backgroundColor: Colors.backgroundRect.hex,
		position: "absolute",
		borderRadius: 5,
	},
});
