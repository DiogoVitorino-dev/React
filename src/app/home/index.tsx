import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedRects, MenuButton, View } from "../../components";
import Colors from "../../constants/Colors";

export default function MenuPage() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<MenuButton label="Lista de musicas" toRight={50} />
				<MenuButton label="Lista de musicas" toRight={70} />
				<MenuButton label="Lista de musicas" toRight={70} />
				<AnimatedRects />
			</View>
			<StatusBar backgroundColor={Colors.background} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		flexDirection: "column",
		paddingVertical: 20,
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
