export interface CustomTheme {
	colors: {
		bgPrimary: string;
		bgSecondary: string;
		bgTertiary: string;
		buttonBgPrimary: string;
		buttonBgDisabled: string;
		buttonTextDisabled: string;
		textPrimary: string;
	};

	order: {
		mainIndex: number;
		firstIndex: number;
		mediumIndex: number;
		lastIndex: number;
	};
}
