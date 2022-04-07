import React, { useEffect, useState } from "react";

import {
	Container,
	TesteScroll,
	TitleImage,
	PokeList,
} from "./styles";

import PokeLogo from "../../assets/pokemon-logo.png";

import { Load } from "../../components/Load";

import { Card } from "../Card";

import { api } from "../../services/api";

export function Home() {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);

	async function getPokemons() {
		const response = await api.get("pokemon-form?limit=10");
		const results = response.data.results;

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
				// <PokeList
				// 	data={pokemons}
				// 	keyExtractor={(item) => item.id}
				// 	renderItem={(item) => {
				// 		<Text style={{ fontSize: 21 }}>
				// 			{item.name}
				// 		</Text>;
				// 	}}
				// 	showsHorizontalScrollIndicator={false}
				// />
				<TesteScroll>
					<Card />
				</TesteScroll>
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
