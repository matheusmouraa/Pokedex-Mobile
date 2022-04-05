import React from "react";

import {
	Container,
	BorderImage,
	TitleImage,
} from "./styles";

import PokeLogo from "../../assets/pokemon-logo.png";

export function Home() {
	return (
		<Container>
			<BorderImage>
				<TitleImage source={PokeLogo} />
			</BorderImage>
		</Container>
	);
}
