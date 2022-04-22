import React from "react";

import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex: 1;
	align-items: center;
`;

export const PokemonImage = styled.Image`
	margin-top: ${getStatusBarHeight() + 70}px;
	width: 90%;
	height: 320px;
`;
