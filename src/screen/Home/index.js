import React, { useEffect, useState } from "react";

import {
	Container,
	BorderImage,
	TitleImage,
	PokeList,
} from "./styles";

import PokeLogo from "../../assets/pokemon-logo.png";

import { Load } from "../../components/Load";

import { Card } from "../Card";

import { api } from "../../services/api";

export function Home() {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(false);

	async function getPokemons() {
		try {
			const response = await api.get(
				"pokemon-form?limit=10"
			);

			setPokemons(response.data.results);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getPokemons();
	});

	return (
		<Container>
			<TitleImage source={PokeLogo} />
			{loading ? (
				<Load />
			) : (
				<PokeList
					data={pokemons}
					keyExtractor={(item) => item.key}
					renderItem={(item) => {
						<Card data={item} />;
					}}
					showsHorizontalScrollIndicator={false}
				/>
			)}
			{/* <Appointment
								data={item}
								activeOpacity={0.8}
								onPress={() =>
									function handleAppointmentDetails(guildSelected) {
										navigation.navigate("AppointmentDetails", {
											guildSelected,
										});
									}
									handleAppointmentDetails(item) */}
		</Container>
	);
}
