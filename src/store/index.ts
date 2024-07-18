import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { authApi } from '@/services/api/auth';
import { copingCartsApi } from '@/services/api/copingCarts';
import { exerciserSessionApi } from '@/services/api/exerciserSessions';
import { notificationApi } from '@/services/api/notification';
import { rateApi } from '@/services/api/rate';
import { sessionApi } from '@/services/api/session';
import { supportApi } from '@/services/api/support';
import { userApi } from '@/services/api/user';

import { authReducer } from './auth';
import { chatReducer } from './chat';
import { copingCartsReducer } from './copingCart';
import { exerciserSessionReducer } from './exerciserSession';
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
		copingCarts: copingCartsReducer,
		exerciserSession: exerciserSessionReducer,
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[sessionApi.reducerPath]: sessionApi.reducer,
		[rateApi.reducerPath]: rateApi.reducer,
		[copingCartsApi.reducerPath]: copingCartsApi.reducer,
		[supportApi.reducerPath]: supportApi.reducer,
		[notificationApi.reducerPath]: notificationApi.reducer,
		[exerciserSessionApi.reducerPath]: exerciserSessionApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({}).concat(
			authApi.middleware,
			userApi.middleware,
			sessionApi.middleware,
			rateApi.middleware,
			copingCartsApi.middleware,
			supportApi.middleware,
			notificationApi.middleware,
			exerciserSessionApi.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
