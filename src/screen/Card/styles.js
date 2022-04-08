import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.TouchableOpacity`
	margin: 5px;
	justify-content: center;
	align-items: center;
	width: 32%;
	height: 140px;
	border: 1px solid;
	border-radius: 8px;
`;

export const PokeImage = styled.Image`
	width: 100px;
	height: 125px;
`;

export const Name = styled.Text`
	font-family: ${theme.fonts.title500};
	font-size: 14px;
	padding-bottom: 10px;
`;
