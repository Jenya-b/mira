export interface CustomTheme {
	colors: {
		bgPrimary: string;
		bgSecondary: string;
		bgTertiary: string;
		inputBgPrimary: string;
		buttonBgPrimary: string;
		buttonBgDisabled: string;
		buttonTextDisabled: string;
		textPrimary: string;
		textSecondary: string;
	};

	order: {
		mainIndex: number;
		firstIndex: number;
		mediumIndex: number;
		lastIndex: number;
	};
}
