import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../global/styles/theme";

export const Container = styled.TouchableOpacity`
	margin: 3px;
	justify-content: center;
	align-items: center;
	width: 32%;
	height: 140px;
	border: 1px solid;
	border-radius: 8px;
`;

export const PokeImage = styled.Image`
	margin-top: 7px;
	width: 120px;
	height: 125px;
`;

export const Name = styled.Text`
	font-family: ${theme.fonts.title500};
	font-size: ${RFValue(14)}px;
	padding-bottom: 10px;
`;
