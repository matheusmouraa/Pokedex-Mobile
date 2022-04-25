import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
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
	background: ${theme.colors.backgroundAbout};
	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
	align-items: center;
`;

export const Title = styled.Text`
	margin: 20px 0;
	font-size: ${RFValue(20)}px;
	font-weight: bold;
	font-family: ${theme.fonts.title700};
	color: ${theme.colors.primary};
`;

export const LeftText = styled.Text`
	color: #000;
	width: 120px;
	font-size: 12px;
	font-weight: bold;
`;

export const RightText = styled.Text`
	color: #747476;
`;
