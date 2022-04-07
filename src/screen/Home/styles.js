import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex: 1;
	align-items: center;
`;

export const TitleImage = styled.Image`
	margin-top: ${30 + getStatusBarHeight()}px;
	width: 90%;
	height: 135px;
`;

// export const Filter = styled.SearchBar`

// `

export const TesteScroll = styled.ScrollView`
	margin-top: 45px;
	width: 90%;
`;

export const PokeList = styled.FlatList`
	margin-top: 20px;
`;
