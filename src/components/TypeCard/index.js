import React from "react";

import { Container, TypeName } from "./styles";

export function TypeCard({ type, align }) {
	return (
		<Container type={type} align={align}>
			<TypeName>{type}</TypeName>
		</Container>
	);
}
