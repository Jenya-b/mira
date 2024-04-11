import { createTheme } from '@mui/material';

import { Colors } from './colors';

export const theme = createTheme({
	colors: {
		bgPrimary: Colors.BLUE_100,
		bgSecondary: Colors.BLUE_200,
		bgTertiary: Colors.BLUE_LIGHT_100,

		inputBgPrimary: Colors.WHITE_100,

		buttonBgPrimary: Colors.GREEN_100,
		buttonBgDisabled: Colors.SILVER_100,
		buttonTextDisabled: Colors.SILVER_200,

		textPrimary: Colors.WHITE_100,
		textSecondary: Colors.BLACK,
	},

	order: {
		mainIndex: 150,
		firstIndex: 100,
		mediumIndex: 50,
		lastIndex: 10,
	},
});
