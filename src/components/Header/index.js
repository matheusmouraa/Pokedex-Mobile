import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import {
	Container,
	ReturnButton,
	PokeName,
} from "./styles";
import { theme } from "../../global/styles/theme";

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
					size={30}
					color={theme.colors.primary}
				/>
			</ReturnButton>

			<PokeName>{name}</PokeName>
		</Container>
	);
}
