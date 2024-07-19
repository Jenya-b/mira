import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SessionBlocks {
	CARDS,
	CHAT,
}

export enum StageEnum {
	INTRO = 'INTRO',
	SCRIPT = 'SCRIPT',
	NEW_THOUGHT_EVALUATION = 'NEW_THOUGHT_EVALUATION',
}

export enum MessageType {
	MSG = 'msg',
	KB_UPD = 'kb_upd',
	UPD_MSG = 'upd_msg',
	ERROR_MSG = 'error_msg',
	ORD_MSG = 'ord_msg',
	CARD = 'card',
}

export enum Author {
	USER = 1,
	PSYCHOLOGIST = 4,
	SERVER = 5,
}

export enum DegreeOfExpression {
	LOW,
	AVERAGE,
	HIGH,
}

export enum DistortionCardsEnum {
	CATASTROPHIZATION = 'CTPH', // Катастрофизация
	OUGHT = 'OGTM', // Долженствование
	HYPERGENERALIZATION = 'OVGN', // Гиперобобщение
	BLACK_AND_WHITE_THINKING = 'BWTK', // Чёрно-белое мышление
	FILTRATION = 'FLTG', // Фильтрация
	PERSONALIZATION = 'PRSZ', // Персонализация
	EMOTIONAL_REASONING = 'EMRS', // Эмоциональная аргументация
	MAGNIFICATION_MINIMIZATION = 'MGMM', // Магнификация/минимизация
	NEGATIVE_FORECASTING = 'NGFC', // Негативное прогнозирование
	MIND_READING = 'MDRD', // Чтение мыслей
	UNFAIR_COMPARISON = 'UFCO', // Несправедливое сравнение
	PERFECTIONISM = 'PRFM', // Перфекционизм
	MAGICAL_THINKING = 'MGTK', // Магическое мышление
	LABELING = 'LBLG', // Навешивание ярлыков
}

export interface ButtonsWS {
	action: string;
	content: string;
	action_param?: number;
}

export type StringObject = {
	[key: string]: string;
};

export type StringObjectButtons = {
	[key: string]: ButtonsWS[];
};

export interface AdditionalData {
	cards?: string[];
	descriptions?: StringObject[];
	severity?: DegreeOfExpression;
	distortion_tag?: DistortionCardsEnum;
}

export interface Message {
	id: number;
	stage: StageEnum;
	author: Author;
	gpt: boolean;
	role: null | string;
	content: string;
	created_at: string;
	type: MessageType;
	buttons: ButtonsWS[] | StringObjectButtons[] | null;
	additional_data: AdditionalData | null;
	newMessage?: boolean;
	activeBtn?: string;
}

export interface Session {
	id: number;
	active: boolean;
	script: number;
	input_attempts: number;
	created_at: string;
	last_stage: string;
	messages: Message[];
}

export interface LastThoughts {
	session: number;
	thought: string;
	new_thought: string;
}

interface InitialState {
	inputValue: string;
	hiddenInput: boolean;
	inputBlock: boolean;
	sessionBlock: SessionBlocks;
	currentSession: Session | null;
	typingComplete: boolean;
	currentStage: StageEnum;
	isGetSessionData: boolean;
	buttonsBlock: boolean;
}

const initialState: InitialState = {
	inputValue: '',
	hiddenInput: true,
	inputBlock: false,
	sessionBlock: SessionBlocks.CARDS,
	currentSession: null,
	typingComplete: false,
	currentStage: StageEnum.INTRO,
	isGetSessionData: false,
	buttonsBlock: false,
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
		setInputBlock(state, action: PayloadAction<boolean>): void {
			state.inputBlock = action.payload;
		},
		setSessionBlock(state, action: PayloadAction<SessionBlocks>): void {
			state.sessionBlock = action.payload;
		},
		addCurrentSession(state, action: PayloadAction<Session>): void {
			state.currentSession = action.payload;

			const messages = state.currentSession.messages;

			if (messages.length) {
				const lastMessage = messages[messages.length - 1];
				state.hiddenInput =
					(lastMessage.buttons !== null && lastMessage.buttons.length > 0) ||
					!!lastMessage.additional_data?.cards;
			}
		},
		addMessage(state, action: PayloadAction<Message>) {
			if (state.currentSession === null) {
				return;
			}

			state.currentSession.messages.push(action.payload);
			state.hiddenInput =
				(action.payload.buttons !== null && action.payload.buttons.length > 0) ||
				!!action.payload.additional_data?.cards;
		},
		setTypingComplete(state, action: PayloadAction<boolean>) {
			state.typingComplete = action.payload;
		},
		setCurrentStage(state, action: PayloadAction<StageEnum>) {
			state.currentStage = action.payload;
		},
		setIsGetSessionData(state, action: PayloadAction<boolean>) {
			state.isGetSessionData = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const {
	setInputValue,
	resetState,
	setHideInput,
	setInputBlock,
	setSessionBlock,
	addCurrentSession,
	setTypingComplete,
	setCurrentStage,
	addMessage,
	setIsGetSessionData,
} = exerciserSessionSlice.actions;

export const exerciserSessionReducer = exerciserSessionSlice.reducer;
