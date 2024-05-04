import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';

interface Sub {
	practice_time?: string;
	new_through_time?: string;
	new_thoughts_days?: number;
	practice_days?: number;
	notify_email?: boolean;
	deactivate?: boolean;
	settings?: PushSubscription;
}

export const pushNotificationApi = createApi({
	reducerPath: 'pushNotificationApi',
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
		subscription: build.mutation<{ id: number }, Sub>({
			query: (body) => ({
				method: 'PATCH',
				url: '/v1/users/me/notification-settings/',
				body,
				headers: {
					accept: 'application/json',
				},
			}),
		}),
	}),
});

export const { useSubscriptionMutation } = pushNotificationApi;
