import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum TrainingBlock {
	FILTER,
	COPING_CARD,
}

interface InitialState {
	activeFilter: boolean;
	isTraining: boolean;
	trainingBlock: TrainingBlock;
	cardTrainingBlock: number;
}

const initialState: InitialState = {
	activeFilter: false,
	isTraining: true,
	trainingBlock: TrainingBlock.FILTER,
	cardTrainingBlock: 0,
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
		setTrainingBlock(state, action: PayloadAction<TrainingBlock>): void {
			state.trainingBlock = action.payload;
		},
		setCardTrainingBlock(state, action: PayloadAction<number>): void {
			state.cardTrainingBlock = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const {
	setActiveFilter,
	setIsTraining,
	setTrainingBlock,
	setCardTrainingBlock,
	resetState,
} = practiceSlice.actions;

export const practiceReducer = practiceSlice.reducer;
