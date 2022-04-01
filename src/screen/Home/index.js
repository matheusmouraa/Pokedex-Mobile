import React from "react";

import { Container, HomeImage } from "./styles";
import PokeLogo from "../../assets/pokemon-logo.jpg";

export function Home() {
	return (
		<Container>
			<HomeImage src={PokeLogo} />
		</Container>
	);
}
