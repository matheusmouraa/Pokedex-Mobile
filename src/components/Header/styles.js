import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	width: 100%;
	height: 60px;
	margin-top: ${getStatusBarHeight()}px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border: 2px solid black;
`;

export const ReturnButton = styled.TouchableOpacity`
	margin-left: 10px;
`;

export const PokeName = styled.Text`
	font-size: ${RFValue(16)}px;
	font-family: ${theme.fonts.title700};
	color: #000;
`;
