import React from "react";

import { Message, LoadingIcon, Container } from "./styles";

export function Load({ size }) {
	return (
		<Container>
			<LoadingIcon size={size} />
			<Message>Loading...</Message>
		</Container>
	);
}
