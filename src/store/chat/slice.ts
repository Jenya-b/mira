import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SessionBlocks {
	FIRST,
	CHAT,
	FEEDBACK,
	COMPLAINT,
	FUTURE_ACTIONS,
	END_SESSION,
}

interface InitialState {
	inputValue: string;
	hiddenInput: boolean;
	sessionBlock: SessionBlocks;
}

const initialState: InitialState = {
	inputValue: '',
	hiddenInput: false,
	sessionBlock: SessionBlocks.FIRST,
};

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setInputValue(state, action: PayloadAction<string>): void {
			state.inputValue = action.payload;
		},
		setSessionBlock(state, action: PayloadAction<SessionBlocks>): void {
			state.sessionBlock = action.payload;
		},
		setHideInput(state, action: PayloadAction<boolean>): void {
			state.hiddenInput = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setInputValue, setSessionBlock, resetState, setHideInput } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
