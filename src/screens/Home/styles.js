import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import Grid from "react-native-grid-component";
import { theme } from "../../global/styles/theme";

export const ScrollPage = styled.SafeAreaView`
	flex: 1;
`;

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

export const InputView = styled.View`
	flex-direction: row;
`;

export const SearchInput = styled.TextInput`
	margin: 10px;
	height: 45px;
	width: 60%;
	border: 2px solid;
	border-radius: 8px;
	text-align: center;
	border-color: ${theme.colors.primary};
`;

export const ClearSearch = styled.TouchableOpacity`
	position: absolute;
	margin-top: ${getStatusBarHeight() - 10}px;
	margin-left: 225px;
`;

export const PokeList = styled(Grid)`
	padding-bottom: 160;
	margin-right: 10;
`;
