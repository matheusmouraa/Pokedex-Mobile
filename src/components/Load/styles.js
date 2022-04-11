import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Message = styled.Text`
	margin-top: 10px;
	font-size: ${RFValue(12)}px;
	color: ${theme.colors.highlight};
`;
