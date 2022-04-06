import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
	color: ${theme.colors.line};
`;

export const Message = styled.Text`
	font-size: 12px;
`;
