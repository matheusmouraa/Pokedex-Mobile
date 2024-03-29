import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { PokemonInfo } from "../screens/PokemonInfo";

export function AppRoutes() {
	const { Navigator, Screen } =
		createNativeStackNavigator();
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: "translucit",
				},
			}}
		>
			<Screen name='Home' component={Home} />
			<Screen name='PokemonInfo' component={PokemonInfo} />
		</Navigator>
	);
}
