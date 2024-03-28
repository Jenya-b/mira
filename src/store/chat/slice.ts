import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SessionBlocks {
	FIRST,
	CHAT,
	FEEDBACK,
	COMPLAINT,
	END_SESSION,
}

const initialState = {
	inputValue: '',
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
		resetState() {
			return initialState;
		},
	},
});

export const { setInputValue, setSessionBlock, resetState } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
