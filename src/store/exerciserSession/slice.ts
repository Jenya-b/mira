import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SessionBlocks {
	CARDS,
	CHAT,
}

interface InitialState {
	inputValue: string;
	hiddenInput: boolean;
	sessionBlock: SessionBlocks;
}

const initialState: InitialState = {
	inputValue: '',
	hiddenInput: false,
	sessionBlock: SessionBlocks.CARDS,
};

export const exerciserSessionSlice = createSlice({
	name: 'exerciserSession',
	initialState,
	reducers: {
		setInputValue(state, action: PayloadAction<string>): void {
			state.inputValue = action.payload;
		},
		setHideInput(state, action: PayloadAction<boolean>): void {
			state.hiddenInput = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setInputValue, resetState, setHideInput } = exerciserSessionSlice.actions;

export const exerciserSessionReducer = exerciserSessionSlice.reducer;
