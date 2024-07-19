import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';
import {
	addCurrentSession,
	Session,
	SessionBlocks,
	setIsGetSessionData,
	setSessionBlock,
} from '@/store/exerciserSession';

export const exerciserSessionApi = createApi({
	reducerPath: 'exerciserSessionApi',
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
		getLastExerciserSession: build.query<Session, null>({
			query: () => ({
				url: '/exerciser-sessions/last/',
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
						}
					} else {
						dispatch(setSessionBlock(SessionBlocks.CARDS));
					}

					dispatch(setIsGetSessionData(true));
				} catch {
					throw new Error();
				}
			},
		}),
		createSession: build.mutation<Session, null>({
			query: () => ({
				method: 'POST',
				url: '/exerciser-sessions/new/',
				headers: {
					accept: 'application/json',
				},
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;

					if (Object.keys(data).length !== 0) {
						dispatch(addCurrentSession(data));
						dispatch(setSessionBlock(SessionBlocks.CARDS));
					}
				} catch {
					throw new Error();
				}
			},
		}),
		postMessage: build.mutation<
			null,
			{ action: string; content: string; action_param?: number; parent?: number }
		>({
			query: (body) => ({
				method: 'POST',
				url: '/exerciser-sessions/message/',
				body,
				headers: {
					accept: 'application/json',
				},
			}),
		}),
	}),
});

export const {
	useLazyGetLastExerciserSessionQuery,
	usePostMessageMutation,
	useCreateSessionMutation,
} = exerciserSessionApi;
