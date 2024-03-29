import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';
import { User, resetState, setUser } from '@/store/user';

export const userApi = createApi({
	reducerPath: 'userApi',
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
		getUser: build.query<User, null>({
			query: () => ({
				url: '/users/me/',
				headers: {
					accept: 'application/json',
				},
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(setUser(data));
				} catch {
					localStorage.removeItem('accessToken');
					dispatch(resetState());
					throw new Error();
				}
			},
		}),
	}),
});

export const { useGetUserQuery, useLazyGetUserQuery } = userApi;
