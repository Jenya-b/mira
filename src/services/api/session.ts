import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';
import { ButtonsWS, Session, addCurrentSession } from '@/store/chat';

export const sessionApi = createApi({
	reducerPath: 'sessionApi',
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
		getAllSessions: build.query<Session[], null>({
			query: () => ({
				url: '/sessions/',
				headers: {
					accept: 'application/json',
				},
			}),
		}),
		getSessionById: build.query<Session, { id: number }>({
			query: ({ id }) => ({
				url: '/sessions/',
				params: { id },
				headers: {
					accept: 'application/json',
				},
			}),
		}),
		getLastSession: build.query<Session, null>({
			query: () => ({
				url: '/sessions/last/',
				headers: {
					accept: 'application/json',
				},
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;

					if (Object.keys(data).length !== 0) {
						dispatch(addCurrentSession(data));
					}
				} catch {
					throw new Error();
				}
			},
		}),
		createSession: build.mutation<Session, null>({
			query: () => ({
				method: 'POST',
				url: '/sessions/new/',
				headers: {
					accept: 'application/json',
				},
			}),
		}),
		postMessage: build.mutation<ButtonsWS, ButtonsWS>({
			query: (body) => ({
				method: 'POST',
				url: '/sessions/message/',
				body,
				headers: {
					accept: 'application/json',
				},
			}),
		}),
	}),
});

export const {
	useGetAllSessionsQuery,
	useGetSessionByIdQuery,
	useGetLastSessionQuery,
	useCreateSessionMutation,
	useLazyGetLastSessionQuery,
	usePostMessageMutation,
} = sessionApi;
