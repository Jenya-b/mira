import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		resetState() {
			return initialState;
		},
	},
});

export const { resetState } = notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;
