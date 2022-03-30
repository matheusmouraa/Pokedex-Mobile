import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";

export function Background({ children }) {
	return (
		<LinearGradient
			style={{ flex: 1 }}
			colors={[
				theme.colors.secondary90,
				theme.colors.secondary70,
			]}
		>
			{children}
		</LinearGradient>
	);
}
