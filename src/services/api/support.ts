import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';

export const supportType = [[]];

export const supportApi = createApi({
	reducerPath: 'supportApi',
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
		postMessage: build.mutation<null, { content: string; type: string }>({
			query: (body) => ({
				url: '/support-messages/',
				method: 'POST',
				body,
				headers: {
					accept: 'application/json',
				},
			}),
		}),
	}),
});

export const { usePostMessageMutation } = supportApi;
