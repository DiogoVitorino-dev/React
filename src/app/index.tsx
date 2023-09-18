import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from 'expo-router';
import { unstable_settings } from "./_layout";

export default function RootLayoutNav() {

	return (
		<ThemeProvider value={DefaultTheme} >
			<Stack screenOptions={{headerShown: false}} initialRouteName={unstable_settings.initialRouteName}>
				<Stack.Screen name="home" />
			</Stack>
		</ThemeProvider>
	);
}
