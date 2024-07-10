import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CopingCarts {
	id: number;
	thought: string;
	new_thought: string;
	situation: string;
	created_at: string;
	is_favorite: false;
}

interface InitialState {
	copingCarts: CopingCarts[];
}

const initialState: InitialState = {
	copingCarts: [],
};

export const copingCartsSlice = createSlice({
	name: 'copingCarts',
	initialState,
	reducers: {
		setCopingCarts(state, action: PayloadAction<CopingCarts[]>): void {
			state.copingCarts = action.payload;
		},
		updateFavoriteCart(state, action: PayloadAction<{ id: number; isFavorite: boolean }>): void {
			const arr = state.copingCarts.map((item) =>
				item.id === action.payload.id ? { ...item, is_favorite: action.payload.isFavorite } : item
			);

			state.copingCarts = arr as CopingCarts[];
		},
		resetState() {
			return initialState;
		},
	},
});

export const { setCopingCarts, updateFavoriteCart, resetState } = copingCartsSlice.actions;

export const copingCartsReducer = copingCartsSlice.reducer;
