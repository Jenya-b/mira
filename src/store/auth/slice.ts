import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AuthEnum {
	PHONE,
	COD,
	EMAIL,
}

const initialState = {
	phoneNumber: '',
	codeNumber: '',
	authParam: AuthEnum.PHONE,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setPhoneNumber(state, action: PayloadAction<string>): void {
			state.phoneNumber = action.payload;
		},
		setCodeNumber(state, action: PayloadAction<string>): void {
			state.codeNumber = action.payload;
		},
		setAuthParam(state, action: PayloadAction<AuthEnum>): void {
			state.authParam = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setAuthParam, setCodeNumber, setPhoneNumber, resetState } = authSlice.actions;

export const authReducer = authSlice.reducer;
