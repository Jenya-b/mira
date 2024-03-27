import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CreateCodeResponse {
	phone: number;
}

interface CreateCodeRequest {
	phone: number;
}

interface SigninResponse {
	access_token: string;
	exists_user: boolean;
}

interface SigninRequest {
	code: number;
	phone: number;
}

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
	endpoints: (build) => ({
		createCode: build.mutation<CreateCodeResponse, CreateCodeRequest>({
			query: (body) => ({
				method: 'POST',
				url: '/token/login/',
				body,
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}),
		}),
		signin: build.mutation<SigninResponse, SigninRequest>({
			query: (body) => ({
				method: 'POST',
				url: '/token/create/',
				body,
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}),
		}),
	}),
});

export const { useCreateCodeMutation, useSigninMutation } = authApi;
