import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';

interface WeeklyReview {
	title: string;
	count_sessions: number;
	group_negative_through: {
		[category: string]: string[];
	};
}

export const notificationApi = createApi({
	reducerPath: 'notificationApi',
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
		getWeeklyReview: build.query<WeeklyReview, null>({
			query: () => ({
				url: '/notifications/weekly_review/',
				headers: {
					accept: 'application/json',
				},
			}),
		}),
	}),
});

export const { useGetWeeklyReviewQuery } = notificationApi;
