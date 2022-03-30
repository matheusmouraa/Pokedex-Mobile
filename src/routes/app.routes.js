import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "../global/styles/theme";

import { Home } from "../screen/Home";

export function AppRoutes() {
	const { Navigator, Screen } =
		createNativeStackNavigator();
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: theme.colors.secondary90,
				},
			}}
		>
			<Screen name='Home' component={Home} />
		</Navigator>
	);
}
