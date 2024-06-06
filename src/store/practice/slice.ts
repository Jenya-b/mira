import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum TrainingBlock {
	FILTER,
	COPING_CARD,
}

interface InitialState {
	activeFilter: boolean;
	trainingBlock: TrainingBlock;
	cardTrainingBlock: number;
}

const initialState: InitialState = {
	activeFilter: false,
	trainingBlock: TrainingBlock.COPING_CARD,
	cardTrainingBlock: 0,
};

export const practiceSlice = createSlice({
	name: 'practice',
	initialState,
	reducers: {
		setActiveFilter(state, action: PayloadAction<boolean>): void {
			state.activeFilter = action.payload;
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

export const { setActiveFilter, setTrainingBlock, setCardTrainingBlock, resetState } =
	practiceSlice.actions;

export const practiceReducer = practiceSlice.reducer;
