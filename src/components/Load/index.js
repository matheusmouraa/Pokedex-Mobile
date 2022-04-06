import React from "react";

import { Message, LoadingIcon, Container } from "./styles";

export function Load() {
	return (
		<Container>
			<LoadingIcon />
			<Message>Loading...</Message>
		</Container>
	);
}
