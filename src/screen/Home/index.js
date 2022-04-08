import React, { useEffect, useState } from "react";

import { Container, TitleImage, PokeList } from "./styles";

import Grid from "react-native-grid-component";

import PokeLogo from "../../assets/pokemon-logo.png";

import { Load } from "../../components/Load";
import { Card } from "../Card";

import { api } from "../../services/api";

export function Home() {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);

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
						return <Card data={item} />;
					}}
					style={{
						paddingBottom: 160,
					}}
					numColumns={3}
					showsVerticalScrollIndicator={false}
				/>
			)}
		</Container>
	);
}
