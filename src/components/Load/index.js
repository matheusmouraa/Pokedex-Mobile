import React from "react";

import { ActivityIndicator } from "react-native";
import { theme } from "../../global/styles/theme";

import { Message, Container } from "./styles";

export function Load() {
	return (
		<Container>
			<ActivityIndicator
				size='small'
				color={theme.colors.primary}
			/>
			<Message>Loading...</Message>
		</Container>
	);
}
