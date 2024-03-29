import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
	phone: number;
	email: string;
	first_name: string;
	notify_email: boolean;
}

interface InitialState {
	accessToken: string | null;
	user: User | null;
}

const initialState: InitialState = {
	accessToken: localStorage.getItem('accessToken'),
	user: null,
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
		resetState() {
			return initialState;
		},
	},
});

export const { setAccessToken, setUser, resetState } = userSlice.actions;

export const userReducer = userSlice.reducer;
