import React from "react";

import { LogBox } from "react-native";

import {
	Poppins_500Medium,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
	Inter_400Regular,
	Inter_500Medium,
} from "@expo-google-fonts/inter";

import { useFonts } from "expo-font";

import { Background } from "./src/components/Background";
import { Load } from "./src/components/Load";

import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

LogBox.ignoreLogs(["VirtualizedList"]);

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <Load size='large' />;
	}

	return (
		<Background>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			<Routes />
		</Background>
	);
}
