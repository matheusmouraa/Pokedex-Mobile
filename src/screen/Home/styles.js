import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex: 1;
	align-items: center;
`;

export const BorderImage = styled.View`
	margin-top: ${30 + getStatusBarHeight()}px;
	align-items: center;
	justify-content: center;
	height: 155px;
	width: 99%;
	border-radius: 10px;
	border-style: solid;
	border-width: 2px;
	border-color: ${theme.colors.primary};
	background-color: ${theme.colors.primary};
`;

export const TitleImage = styled.Image`
	width: 90%;
	height: 135px;
`;
