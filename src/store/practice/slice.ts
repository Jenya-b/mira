import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	activeFilter: boolean;
}

const initialState: InitialState = {
	activeFilter: false,
};

export const practiceSlice = createSlice({
	name: 'practice',
	initialState,
	reducers: {
		setActiveFilter(state, action: PayloadAction<boolean>): void {
			state.activeFilter = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setActiveFilter, resetState } = practiceSlice.actions;

export const practiceReducer = practiceSlice.reducer;
