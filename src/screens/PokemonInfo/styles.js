import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex: 1;
	align-items: center;
`;

export const PokemonImage = styled.Image`
	margin-top: 40px;
	width: 90%;
	height: 320px;
`;

export const InfoContainer = styled.View`
	flex: 1;
	width: 100%;
	margin-top: 5px;
	background: ${theme.colors.highlight};
	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
`;

export const TypesList = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 4px;
`;

export const Title = styled.Text`
	font-size: ${RFValue(20)}px;
	font-weight: bold;
	font-family: ${theme.fonts.title700};
	color: ${theme.colors.heading};
	align-self: center;
`;

export const Content = styled.View`
	flex-direction: column;
	margin-left: 30px;
	margin-top: 25px;
`;

export const TextView = styled.View`
	flex-direction: row;
	margin-bottom: 10px;
`;

export const LeftText = styled.Text`
	color: ${theme.colors.heading};
	font-size: ${RFValue(16)}px;
	font-weight: bold;
`;

export const RightText = styled.Text`
	color: ${theme.colors.subtitle};
	font-size: ${RFValue(16)}px;
	margin-left: 8px;
`;
