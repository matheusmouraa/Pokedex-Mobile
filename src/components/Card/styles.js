import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../global/styles/theme";

export const Container = styled.TouchableOpacity`
	margin: 3px;
	justify-content: center;
	align-items: center;
	width: 32%;
	height: 140px;
	border: 2px solid;
	border-radius: 8px;
	border-color: ${theme.colors.primary};
`;

export const PokemonImage = styled.Image`
	margin-top: 7px;
	width: 120px;
	height: 125px;
`;

export const Name = styled.Text`
	color: ${theme.colors.highlight};
	font-family: ${theme.fonts.title500};
	font-size: ${RFValue(14)}px;
	padding-bottom: 13px;
`;
