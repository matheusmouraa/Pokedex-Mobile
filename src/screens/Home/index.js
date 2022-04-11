import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import Grid from "react-native-grid-component";

import PokeLogo from "../../assets/pokemon-logo.png";

import { Load } from "../../components/Load";
import { Card } from "../../components/Card";

import { Container, TitleImage, PokeList } from "./styles";

export function Home() {
	const navigation = useNavigation();

	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);

	function handlePokemonInfo(pokemonSelected) {
		navigation.navigate("PokemonInfo", { pokemonSelected });
	}

	async function getPokemons() {
		const response = await api.get("pokemon-form?limit=10");
		setPokemons(response.data.results);

		setLoading(false);
	}

	useEffect(() => {
		getPokemons();
	}, []);

	return (
		<Container>
			<TitleImage source={PokeLogo} />
			{loading ? (
				<Load />
			) : (
				<Grid
					data={pokemons}
					renderItem={(item) => {
						return (
							<Card
								data={item}
								onPress={() => handlePokemonInfo(item)}
							/>
						);
					}}
					numColumns={3}
					showsVerticalScrollIndicator={false}
				/>
			)}
		</Container>
	);
}
