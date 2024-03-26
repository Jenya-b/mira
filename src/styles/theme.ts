import { createTheme } from '@mui/material';

import { Colors } from './colors';

export const theme = createTheme({
	colors: {
		textPrimary: Colors.BLACK,
	},

	order: {
		mainIndex: 150,
		firstIndex: 100,
		mediumIndex: 50,
		lastIndex: 10,
	},
});
