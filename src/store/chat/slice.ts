import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	inputValue: '',
};

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setInputValue(state, action: PayloadAction<string>): void {
			state.inputValue = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setInputValue, resetState } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
