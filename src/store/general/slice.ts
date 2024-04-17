import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isOpenBurgerMenu: boolean;
}

const initialState: InitialState = {
	isOpenBurgerMenu: false,
};

export const generalSlice = createSlice({
	name: 'general',
	initialState,
	reducers: {
		setOpenBurgerMenu(state, action: PayloadAction<boolean>): void {
			state.isOpenBurgerMenu = action.payload;
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setOpenBurgerMenu, resetState } = generalSlice.actions;

export const generalReducer = generalSlice.reducer;
