import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';
import {
	ButtonsWS,
	LastThoughts,
	Session,
	SessionBlocks,
	addCurrentSession,
	setLastThoughts,
	setSessionBlock,
} from '@/store/chat';

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

						if (data.active && data.messages.length) {
							dispatch(setSessionBlock(SessionBlocks.CHAT));
						} else if (data.active && !data.messages.length) {
							dispatch(setSessionBlock(SessionBlocks.FIRST));
						} else {
							dispatch(setSessionBlock(SessionBlocks.FUTURE_ACTIONS));
						}
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
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(setSessionBlock(SessionBlocks.FIRST));
					dispatch(addCurrentSession(data));
				} catch {
					throw new Error();
				}
			},
		}),
		updateSession: build.mutation<Session, { id: number; result: number }>({
			query: ({ id, result }) => ({
				method: 'PATCH',
				url: `/sessions/${id}/result/`,
				headers: {
					accept: 'application/json',
				},
				body: { result },
			}),
			onQueryStarted: (_, { dispatch }) => {
				try {
					dispatch(setSessionBlock(SessionBlocks.CARDS));
				} catch {
					dispatch(setSessionBlock(SessionBlocks.CARDS));
					throw new Error();
				}
			},
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
		getLastThoughts: build.query<LastThoughts[], null>({
			query: () => ({
				url: '/sessions/last_thoughts/',
				headers: {
					accept: 'application/json',
				},
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(setLastThoughts(data));
				} catch {
					throw new Error();
				}
			},
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
	useUpdateSessionMutation,
	useLazyGetLastThoughtsQuery,
	useGetLastThoughtsQuery,
} = sessionApi;
