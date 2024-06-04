import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';

interface Rate {
	id: number;
	count_session: number;
	short_description: string;
	price: number;
}

export const rateApi = createApi({
	reducerPath: 'rateApi',
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
		getRates: build.query<Rate[], null>({
			query: () => ({
				url: '/tariffs/',
				headers: {
					accept: 'application/json',
				},
			}),
		}),
		getPaymentLink: build.query<string, number>({
			query: (id) => ({
				url: `/tariffs/${id}/payment-link/`,
				headers: {
					accept: 'application/json',
				},
			}),
		}),
	}),
});

export const { useGetRatesQuery, useLazyGetPaymentLinkQuery } = rateApi;
