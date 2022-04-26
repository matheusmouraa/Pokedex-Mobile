import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getColorFromType } from "../../utils/types";

export const Container = styled.View`
	width: 80px;
	height: 30px;
	border-radius: 8px;
	background: ${({ type }) => getColorFromType(type)};
	align-items: center;
	justify-content: center;
	margin-bottom: 8px;
	margin-right: 8px;
`;

export const TypeName = styled.Text`
	font-weight: bold;
	font-size: ${RFValue(16)}px;
	color: #fff;
`;
