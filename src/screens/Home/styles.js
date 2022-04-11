import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import Grid from "react-native-grid-component";

export const Container = styled.View`
	flex: 1;
	align-items: center;
`;

export const TitleImage = styled.Image`
	margin-top: ${30 + getStatusBarHeight()}px;
	width: 90%;
	height: 135px;
	margin-bottom: 20px;
`;

export const PokeList = styled(Grid)`
	padding-bottom: 160;
	margin-right: 10;
`;
