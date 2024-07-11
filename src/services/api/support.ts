import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store';

export enum SupportEnum {
	TECHNICAL = 'TECHNICAL',
	USAGE_SERVICE = 'USAGE_SERVICE',
	COMPENSATION_SESSION = 'COMPENSATION_SESSION',
	GENERAL_QUESTION = 'GENERAL_QUESTION',
	COOPERATION = 'COOPERATION',
	OTHER = 'OTHER',
}

export const supportType = {
	[SupportEnum.TECHNICAL]: 'Техническая проблема',
	[SupportEnum.USAGE_SERVICE]: 'Вопросы по использованию сервиса',
	[SupportEnum.COMPENSATION_SESSION]: 'Компенсация за сессию',
	[SupportEnum.GENERAL_QUESTION]: 'Общие вопросы',
	[SupportEnum.COOPERATION]: 'Сотрудничество',
	[SupportEnum.OTHER]: 'Другое',
};

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
		postMessage: build.mutation<null, { content: string; type: SupportEnum }>({
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
