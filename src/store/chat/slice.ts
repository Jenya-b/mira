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

export enum Statuses {
	NO_START,
	IN_PROCESS,
	ONE_OPTION,
	SEVERAL_OPTION,
	END_SESSION,
	WAS_ONE_OF_SEVERAL,
}

export enum StageEnum {
	SITUATION = 'SITUATION',
	DISTORTIONS = 'DISTORTIONS',
	QUESTIONNAIRE = 'QUESTIONNAIRE',
	THERAPY_STARTING_POINT = 'THERAPY_STARTING_POINT',
	DOUBT_CREATION = 'DOUBT_CREATION',
	NEW_THOUGHT_CREATION = 'NEW_THOUGHT_CREATION',
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
	id?: number;
	additional_data: AdditionalData | null;
	author: Author;
	buttons: ButtonsWS[] | StringObjectButtons[] | null;
	content: string;
	created_at: string;
	gpt: boolean;
	role: null | string;
	stage: StageEnum;
	status: Statuses;
	type: MessageType;
	parent: number | null;
	newMessage?: boolean;
	activeBtn?: string;
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

export interface LastThoughts {
	session: number;
	thought: string;
	new_thought: string;
}

interface InitialState {
	inputValue: string;
	hiddenInput: boolean;
	inputBlock: boolean;
	buttonsBlock: boolean;
	sessionBlock: SessionBlocks;
	currentSession: Session | null;
	currentStage: StageEnum;
	typingComplete: boolean;
	reconnectWS: boolean;
	lastThoughts: LastThoughts[];
}

const initialState: InitialState = {
	inputValue: '',
	hiddenInput: false,
	inputBlock: false,
	buttonsBlock: false,
	sessionBlock: SessionBlocks.HOME,
	currentSession: null,
	currentStage: StageEnum.SITUATION,
	typingComplete: false,
	reconnectWS: false,
	lastThoughts: [],
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
		setInputBlock(state, action: PayloadAction<boolean>): void {
			state.inputBlock = action.payload;
		},
		setHideInput(state, action: PayloadAction<boolean>): void {
			state.hiddenInput = action.payload;
		},
		setIsButtonsBlock(state, action: PayloadAction<boolean>): void {
			state.buttonsBlock = action.payload;
		},
		addCurrentSession(state, action: PayloadAction<Session>) {
			const parentMessages = action.payload.messages.filter((item) => item.parent !== null);

			const currentSession = {
				...action.payload,
				messages: action.payload.messages
					.filter((item) => item.parent === null)
					.map((item) => {
						const mess = parentMessages.find((i) => i.parent === item.id);

						if (mess) {
							return { ...item, activeBtn: mess.content };
						}

						return item;
					}),
			};

			state.currentSession = currentSession;

			const messages = currentSession.messages;

			if (messages.length) {
				const lastMessage = messages[messages.length - 1];
				state.buttonsBlock =
					(lastMessage.buttons !== null && lastMessage.buttons.length > 0) ||
					!!lastMessage.additional_data?.cards;
			}
		},
		addMessage(state, action: PayloadAction<Message>) {
			if (state.currentSession === null) {
				return;
			}

			state.currentSession.messages.push(action.payload);
			state.buttonsBlock =
				(action.payload.buttons !== null && action.payload.buttons.length > 0) ||
				!!action.payload.additional_data?.cards;
		},
		flagMessages(state) {
			if (state.currentSession === null) {
				return;
			}

			const messages = state.currentSession.messages.map((item) => ({
				...item,
				newMessage: false,
			}));
			state.currentSession.messages = messages;
		},
		disconnectCurrentSession(state) {
			if (state.currentSession === null) {
				return;
			}

			state.currentSession = { ...state.currentSession, active: false };
		},
		setCurrentStage(state, action: PayloadAction<StageEnum>) {
			state.currentStage = action.payload;
		},
		setTypingComplete(state, action: PayloadAction<boolean>) {
			state.typingComplete = action.payload;
		},
		setLastThoughts(state, action: PayloadAction<LastThoughts[]>) {
			state.lastThoughts = action.payload;
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
	setIsButtonsBlock,
	disconnectCurrentSession,
	setTypingComplete,
	flagMessages,
	setInputBlock,
	setLastThoughts,
} = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
