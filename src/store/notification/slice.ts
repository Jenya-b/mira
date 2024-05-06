import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{
		outcome: 'accepted' | 'dismissed';
		platform: string;
	}>;
	prompt(): Promise<void>;
}

interface InitialState {
	prompt: IBeforeInstallPromptEvent | null;
	isActivePWA: boolean;
}

const initialState: InitialState = {
	prompt: null,
	isActivePWA: false,
};

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		setPromptState(state, action: PayloadAction<IBeforeInstallPromptEvent | null>): void {
			state.prompt = action.payload;
		},
		setActivePWA(state, action: PayloadAction<boolean>): void {
			state.isActivePWA = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setPromptState, setActivePWA, resetState } = notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;
