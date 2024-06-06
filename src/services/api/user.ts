import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';
import { Subscription, User, resetState, setNotificationData, setUser } from '@/store/user';

interface UpdateUserRequest {
	email?: string;
	first_name?: string;
	notify_email?: boolean;
	intro_passed?: boolean;
	training_after_intro_passed?: boolean;
	training_coping_carts_passed?: boolean;
	training_after_session_passed?: boolean;
}

interface SubscriptionRequest {
	deactivate?: boolean;
	new_thoughts_days?: number;
	new_through_time?: string | null;
	notify_email?: boolean;
	practice_days?: number;
	practice_time?: string | null;
	settings?: PushSubscription;
}

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_API_URL}/v1`,
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
		updateUser: build.mutation<User, UpdateUserRequest>({
			query: (body) => ({
				method: 'PATCH',
				url: '/users/me/',
				body,
				headers: {
					accept: 'application/json',
				},
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(setUser(data));
				} catch {
					throw new Error();
				}
			},
		}),
		updateNotification: build.mutation<Subscription, SubscriptionRequest>({
			query: (body) => ({
				method: 'PATCH',
				url: '/users/me/notification-settings/',
				body,
				headers: {
					accept: 'application/json',
				},
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(setNotificationData(data));
				} catch {
					throw new Error();
				}
			},
		}),
		getNotification: build.query<Subscription, null>({
			query: () => ({
				url: '/users/me/notification-settings/',
				headers: {
					accept: 'application/json',
				},
			}),
			onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
				try {
					const { data } = await queryFulfilled;
					dispatch(setNotificationData(data));
				} catch {
					throw new Error();
				}
			},
		}),
	}),
});

export const {
	useGetUserQuery,
	useLazyGetUserQuery,
	useUpdateUserMutation,
	useUpdateNotificationMutation,
	useGetNotificationQuery,
} = userApi;
