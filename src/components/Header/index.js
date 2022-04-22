import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
	Container,
	ReturnButton,
	PokeName,
} from "./styles";

export function Header({ name }) {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<Container>
			<ReturnButton
				onPress={handleGoBack}
				activeOpacity={0.8}
			>
				<Ionicons
					name='arrow-back'
					size={28}
					color='black'
				/>
			</ReturnButton>

			<PokeName>{name}</PokeName>
		</Container>
	);
}
