import React from "react";
import { ActivityIndicator } from "react-native";

import { Message, LoadingIcon, Container } from "./styles";

export function Load() {
	return (
		<Container>
			<ActivityIndicator size='large' />
			<Message>Loading...</Message>
		</Container>
	);
}
