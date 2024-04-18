import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	activeFilter: boolean;
	isTraining: boolean;
}

const initialState: InitialState = {
	activeFilter: false,
	isTraining: true,
};

export const practiceSlice = createSlice({
	name: 'practice',
	initialState,
	reducers: {
		setActiveFilter(state, action: PayloadAction<boolean>): void {
			state.activeFilter = action.payload;
		},
		setIsTraining(state, action: PayloadAction<boolean>): void {
			state.isTraining = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setActiveFilter, setIsTraining, resetState } = practiceSlice.actions;

export const practiceReducer = practiceSlice.reducer;
