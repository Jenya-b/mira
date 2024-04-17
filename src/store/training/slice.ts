import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum TrainingParam {
	INPUT = 'input',
	MENU = 'menu',
	SESSION = 'session',
	CARD = 'card',
	MODAL = 'modal',
	MICROPHONE = 'microphone',
}

interface InitialState {
	trainingBlock: TrainingParam;
}

const initialState: InitialState = {
	trainingBlock: TrainingParam.INPUT,
};

export const trainingSlice = createSlice({
	name: 'training',
	initialState,
	reducers: {
		setTrainingBlock(state, action: PayloadAction<TrainingParam>): void {
			state.trainingBlock = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setTrainingBlock, resetState } = trainingSlice.actions;

export const trainingReducer = trainingSlice.reducer;
