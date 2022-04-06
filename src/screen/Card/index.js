import React from "react";

import { Container, BorderCard } from "./styles";

export function Card({ data }) {
	return (
		<Container>
			<BorderCard>
				<Name>{data.name}</Name>
			</BorderCard>
		</Container>
	);
}
