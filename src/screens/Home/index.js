import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import Grid from "react-native-grid-component";
import { api } from "../../services/api";

import {
	Container,
	ScrollPage,
	TitleImage,
	InputView,
	SearchInput,
	ClearSearch,
} from "./styles";

import PokeLogo from "../../assets/pokemon-logo.png";
import { AntDesign } from "@expo/vector-icons";

import { Load } from "../../components/Load";
import { Card } from "../../components/Card";

export function Home() {
	const navigation = useNavigation();

	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");

	// function handleSearch(text) {
	// 	const formattedQuery = text.toLowerCase();
	// 	const data = filter(this.state.fullData, (user) => {
	// 		return this.contains(user, formattedQuery);
	// 	});
	// 	this.setState({ data, query: text });
	// }

	function ClearSearchInput() {
		setSearch("");
	}

	function handlePokemonInfo(pokemonSelected) {
		navigation.navigate("PokemonInfo", { pokemonSelected });
	}

	async function getPokemons() {
		const response = await api.get("pokemon-form?limit=5");
		setPokemons(response.data.results);

		setLoading(false);
	}

	useEffect(() => {
		getPokemons();
	}, []);

	return (
		<ScrollPage>
			<Container>
				<TitleImage source={PokeLogo} />

				<InputView>
					<SearchInput
						autoCapitalize='none'
						autoCorrect={false}
						onChange={setSearch}
						value={search}
						placeholder='Search'
					/>
					<ClearSearch
						onPress={ClearSearchInput}
						activeOpacity={0.9}
					>
						<AntDesign
							name='closecircle'
							size={20}
							color='black'
						/>
					</ClearSearch>
				</InputView>
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
		</ScrollPage>
	);
}
