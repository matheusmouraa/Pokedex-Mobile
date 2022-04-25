import React, { useEffect, useState } from "react";

import axios from "axios";
import { useRoute } from "@react-navigation/native";

import { Load } from "../../components/Load";
import { Header } from "../../components/Header";

import {
	Container,
	PokemonImage,
	InfoContainer,
	Title,
	LeftText,
	RightText,
} from "./styles";

export function PokemonInfo() {
	const route = useRoute();
	const { pokemonSelected } = route.params;

	const [pokemon, setPokemon] = useState({});
	const [loading, setLoading] = useState(true);

	async function getPokeInfos() {
		const response = await axios.get(pokemonSelected.url);
		setPokemon(response.data);
		setLoading(false);
	}

	useEffect(() => {
		getPokeInfos();
	}, []);

	return (
		<Container>
			{loading ? (
				<Load />
			) : (
				<>
					<Header name={pokemon.name} />

					<PokemonImage
						source={{ uri: pokemon.sprites.front_default }}
					/>

					<InfoContainer>
						<Title>About</Title>

						<LeftText>{pokemon.weight}</LeftText>
						<RightText>{pokemon.height}</RightText>
					</InfoContainer>
				</>
			)}
		</Container>
	);
}
