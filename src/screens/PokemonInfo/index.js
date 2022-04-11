import React, { useEffect, useState } from "react";

import { useRoute } from "@react-navigation/native";
import axios from "axios";

import { Load } from "../../components/Load";

import {
	Container,
	PokemonImage,
	PokemonName,
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
	}, [pokemon]);

	return loading ? (
		<Load size='large' />
	) : (
		<Container>
			<PokemonImage
				source={{ uri: pokemon.sprites.front_default }}
			/>

			<PokemonName>{pokemon.name}</PokemonName>

			{/* <Grid
				data={pokemon.abilities}
				renderItem={(item) => {
					<SkillName>{item.ability.name}</SkillName>;
				}}
				numColumns={1}
			/> */}
		</Container>
	);
}
