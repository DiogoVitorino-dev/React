import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSequence,
	withSpring,
	withTiming,
} from "react-native-reanimated";

import { Text } from "./Themed";
import Colors from "../constants/Colors";

interface IProps {
	label: string;
	toRight?: number;
}

export function MenuButton({ label, toRight }: IProps) {
	const right = useSharedValue(toRight || 100);
	const bgRed = useSharedValue(Colors.buttonMenu.red);
	const bgBlue = useSharedValue(Colors.buttonMenu.blue);
	const bgGreen = useSharedValue(Colors.buttonMenu.green);
	const bgAfter = useSharedValue(Colors.buttonMenuSelected.hex);

	const onPress = () => {
		console.log("claro");
		const { blue, green, red } = Colors.buttonMenuSelected;
		right.value = toRight ? toRight - 50 : 50;
		bgRed.value = withSequence(
			withTiming(200, { duration: 50 }),
			withTiming(red),
		);
		bgGreen.value = withSequence(
			withTiming(200, { duration: 50 }),
			withTiming(green),
		);
		bgBlue.value = withSequence(
			withTiming(200, { duration: 50 }),
			withTiming(blue),
		);
		bgAfter.value = Colors.text;
	};

	const onBlur = () => {
		console.log("escuro");
		right.value = toRight || 100;
		bgRed.value = 0;
		bgGreen.value = 26;
		bgBlue.value = 36;
		bgAfter.value = Colors.buttonMenuSelected.hex;
	};

	const animatedStyle = useAnimatedStyle(
		() => ({
			right: withSpring(right.value, { duration: 500 }),
			backgroundColor: `rgb(${bgRed.value},${bgGreen.value},${bgBlue.value})`,
		}),
		[bgBlue, bgRed, bgGreen, right],
	);

	return (
		<Pressable onPressIn={() => onPress()} onPressOut={onBlur}>
			<Animated.View style={[styles.container, animatedStyle]}>
				<Text style={styles.label}>{label}</Text>
				<Animated.View
					style={[styles.afterBar, { backgroundColor: bgAfter }]}
				/>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		maxWidth: 300,
		height: 60,
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingEnd: 50,
		alignItems: "center",
	},
	afterBar: {
		width: 20,
		position: "absolute",
		right: -16,
		borderLeftWidth: 10,
		borderLeftColor: Colors.background,
		height: "100%",
	},
	label: {
		fontSize: 14,
		fontWeight: "300",
		textTransform: "uppercase",
	},
});
