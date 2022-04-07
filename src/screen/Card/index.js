import React from "react";

import { Container, PokeImage, Name } from "./styles";
import teste from "../../assets/teste.png";

export function Card({ data }) {
	return (
		<Container activeOpacity={0.6}>
			<PokeImage source={teste} />
			<Name>Bulbasaur</Name>
		</Container>
	);
}
