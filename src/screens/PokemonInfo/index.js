import React, { useEffect, useState } from "react";

import { useRoute } from "@react-navigation/native";
import axios from "axios";

import { Load } from "../../components/Load";
import { Header } from "../../components/Header";
import { TypeCard } from "../../components/TypeCard";

import {
	Container,
	PokemonImage,
	InfoContainer,
	Title,
	TypesList,
	Content,
	TextView,
	LeftText,
	RightText,
} from "./styles";

export function PokemonInfo() {
	const route = useRoute();
	const { pokemonSelected } = route.params;

	const [pokemon, setPokemon] = useState({});
	const [loading, setLoading] = useState(true);

	async function getPokeInfos() {
		const urlRefactor = pokemonSelected.url.replace(
			"-form",
			""
		);
		const response = await axios.get(urlRefactor);
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
						<TypesList>
							{pokemon.types.map((item, key) => {
								return (
									<TypeCard
										type={item.type.name}
										key={key}
									/>
								);
							})}
						</TypesList>
						<Content>
							<TextView>
								<LeftText>Height:</LeftText>
								<RightText>{pokemon.height}</RightText>
							</TextView>
							<TextView>
								<LeftText>Weight:</LeftText>
								<RightText>{pokemon.weight}</RightText>
							</TextView>
							<TextView>
								<LeftText>Hp:</LeftText>
								<RightText>
									{pokemon.stats[0].base_stat}
								</RightText>
							</TextView>
							<TextView>
								<LeftText>Attack:</LeftText>
								<RightText>
									{pokemon.stats[1].base_stat}
								</RightText>
							</TextView>
							<TextView>
								<LeftText>Defense:</LeftText>
								<RightText>
									{pokemon.stats[2].base_stat}
								</RightText>
							</TextView>
							<TextView>
								<LeftText>Speed:</LeftText>
								<RightText>
									{pokemon.stats[5].base_stat}
								</RightText>
							</TextView>
						</Content>
					</InfoContainer>
				</>
			)}
		</Container>
	);
}
