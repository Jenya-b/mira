import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { authApi } from '@/services/api/auth';
import { rateApi } from '@/services/api/rate';
import { sessionApi } from '@/services/api/session';
import { userApi } from '@/services/api/user';

import { authReducer } from './auth';
import { chatReducer } from './chat';
import { generalReducer } from './general';
import { notificationReducer } from './notification';
import { practiceReducer } from './practice';
import { trainingReducer } from './training';
import { userReducer } from './user';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		chat: chatReducer,
		user: userReducer,
		training: trainingReducer,
		general: generalReducer,
		practice: practiceReducer,
		notification: notificationReducer,
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[sessionApi.reducerPath]: sessionApi.reducer,
		[rateApi.reducerPath]: rateApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({}).concat(
			authApi.middleware,
			userApi.middleware,
			sessionApi.middleware,
			rateApi.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
