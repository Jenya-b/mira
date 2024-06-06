import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultNotificationData } from '@/constants/pushNotification';
import { getMyTime } from '@/utils/time';

export interface User {
	id: number;
	phone: number;
	email: string;
	first_name: string;
	available_sessions: number;
	intro_passed: boolean;
	training_after_intro_passed: boolean;
	training_coping_carts_passed: boolean;
	training_after_session_passed: boolean;
	count_sessions: number;
}

export interface Subscription {
	deactivate?: boolean;
	new_thoughts_days?: number;
	new_through_time?: string;
	notify_email?: boolean;
	practice_days?: number;
	practice_time?: string;
	settings?: PushSubscription;
}

interface InitialState {
	accessToken: string | null;
	user: User | null;
	notificationData: Subscription | null;
}

const initialState: InitialState = {
	accessToken: localStorage.getItem('accessToken'),
	user: null,
	notificationData: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAccessToken(state, action: PayloadAction<string>): void {
			state.accessToken = action.payload;
		},
		setUser(state, action: PayloadAction<User>): void {
			state.user = action.payload;
		},
		setNotificationData(state, action: PayloadAction<Subscription>): void {
			state.notificationData = {
				...action.payload,
				practice_time: action.payload.practice_time
					? getMyTime(action.payload.practice_time)
					: defaultNotificationData.practice_time,
				new_through_time: action.payload.new_through_time
					? getMyTime(action.payload.new_through_time)
					: defaultNotificationData.new_through_time,
			};
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setAccessToken, setUser, setNotificationData, resetState } = userSlice.actions;

export const userReducer = userSlice.reducer;
