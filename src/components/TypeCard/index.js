import React from "react";

import { Container, TypeName } from "./styles";

export function TypeCard({ type }) {
	return (
		<Container type={type}>
			<TypeName>{type}</TypeName>
		</Container>
	);
}
