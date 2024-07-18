import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';

export interface Session {
	id: number;
	active: boolean;
	script: number;
	input_attempts: number;
	created_at: string;
	last_stage: string;
	messages: string;
}

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
		}),
		createSession: build.mutation<Session, null>({
			query: () => ({
				method: 'POST',
				url: '/exerciser-sessions/new/',
				headers: {
					accept: 'application/json',
				},
			}),
		}),
		postMessage: build.mutation<
			null,
			{ action: string; content: string; action_param?: number; parent?: number }
		>({
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
	useLazyGetLastExerciserSessionQuery,
	usePostMessageMutation,
	useCreateSessionMutation,
} = exerciserSessionApi;
