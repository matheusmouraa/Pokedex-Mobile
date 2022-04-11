import React from "react";

import { ActivityIndicator } from "react-native";
import { theme } from "../../global/styles/theme";

import { Message, Container } from "./styles";

export function Load({ size }) {
	return (
		<Container>
			<ActivityIndicator
				size={size}
				color={theme.colors.primary}
			/>
			<Message>Loading...</Message>
		</Container>
	);
}
