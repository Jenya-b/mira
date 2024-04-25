import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SessionBlocks {
	HOME,
	FIRST,
	CHAT,
	CARDS,
	FEEDBACK,
	COMPLAINT,
	FUTURE_ACTIONS,
	END_SESSION,
}

export enum StageEnum {
	SITUATION = 'SITUATION',
	DISTORTIONS = 'DISTORTIONS',
}

export enum Author {
	USER,
	PSYCHOLOGIST,
}

export interface ButtonsWS {
	action: string;
	action_param: number;
	content: string;
}

export interface Message {
	author: Author;
	buttons: ButtonsWS[] | null;
	content: string;
	created_at: string;
	gpt: boolean;
	role: null | string;
	stage: StageEnum;
	status: 1;
	type: 'msg';
}

export interface Session {
	id: number;
	active: boolean;
	first_time: boolean;
	result: number | null;
	created_at: string;
	last_stage: string;
	messages: Message[];
}

interface InitialState {
	inputValue: string;
	hiddenInput: boolean;
	sessionBlock: SessionBlocks;
	currentSession: Session | null;
	currentStage: StageEnum;
}

const initialState: InitialState = {
	inputValue: '',
	hiddenInput: false,
	sessionBlock: SessionBlocks.HOME,
	currentSession: null,
	currentStage: StageEnum.SITUATION,
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
		addCurrentSession(state, action: PayloadAction<Session>) {
			state.currentSession = action.payload;
		},
		addMessage(state, action: PayloadAction<Message>) {
			if (state.currentSession === null) {
				return;
			}

			state.currentSession.messages.push(action.payload);
		},
		setCurrentStage(state, action: PayloadAction<StageEnum>) {
			state.currentStage = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const {
	setInputValue,
	setSessionBlock,
	resetState,
	setHideInput,
	addCurrentSession,
	addMessage,
	setCurrentStage,
} = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
