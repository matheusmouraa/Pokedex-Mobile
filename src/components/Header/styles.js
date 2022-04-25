import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	width: 100%;
	height: 65px;
	margin-top: ${getStatusBarHeight()}px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border: 2px solid ${theme.colors.primary};
	border-radius: 5px;
`;

export const ReturnButton = styled.TouchableOpacity`
	margin-left: 10px;
`;

export const PokeName = styled.Text`
	flex: 1;
	text-align: center;
	margin-right: 45px;
	font-size: ${RFValue(18)}px;
	font-family: ${theme.fonts.title700};
	color: ${theme.colors.highlight};
`;
