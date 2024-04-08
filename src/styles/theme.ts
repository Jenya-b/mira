import { createTheme } from '@mui/material';

import { Colors } from './colors';

export const theme = createTheme({
	colors: {
		buttonBgPrimary: Colors.GREEN_100,
		buttonBgDisabled: Colors.SILVER_100,
		buttonTextDisabled: Colors.SILVER_200,

		textPrimary: Colors.WHITE_100,
	},

	order: {
		mainIndex: 150,
		firstIndex: 100,
		mediumIndex: 50,
		lastIndex: 10,
	},
});
