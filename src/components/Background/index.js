import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";

export function Background({ children }) {
	return (
		<LinearGradient
			style={{ flex: 1 }}
			colors={[
				theme.colors.secondary80,
				theme.colors.secondary100,
			]}
		>
			{children}
		</LinearGradient>
	);
}
