import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';
import { CopingCarts, setCopingCarts } from '@/store/copingCart';

export const copingCartsApi = createApi({
	reducerPath: 'copingCartsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		prepareHeaders: (
			headers: Headers,
			{ getState }: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>
		): Headers | undefined => {
			const token = (getState() as RootState).user.accessToken;

			if (token) {
				headers.set('Authorization', `JWT ${token}`);

				return headers;
			}

			return undefined;
		},
	}),
	endpoints: (build) => ({
		getCopingCarts: build.query<
			CopingCarts[],
			{ is_favorite?: boolean; limit?: number; page?: number }
		>({
			query: (params) => ({
				url: '/coping-carts/',
				params,
				headers: {
					accept: 'application/json',
				},
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(setCopingCarts(data));
				} catch {
					throw new Error();
				}
			},
		}),
		addFavoriteCart: build.mutation<null, { id: number }>({
			query: ({ id }) => ({
				url: `/coping-carts/${id}/favorite/`,
				method: 'POST',
				headers: {
					accept: 'application/json',
				},
			}),
		}),
		deleteFavoriteCart: build.mutation<null, { id: number }>({
			query: ({ id }) => ({
				url: `/coping-carts/${id}/favorite/`,
				method: 'DELETE',
				headers: {
					accept: 'application/json',
				},
			}),
		}),
	}),
});

export const { useGetCopingCartsQuery, useAddFavoriteCartMutation, useDeleteFavoriteCartMutation } =
	copingCartsApi;
