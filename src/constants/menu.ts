import { path } from '@/router/path';

export const sidebarMenu = [
	{
		title: 'Вопросы и ответы',
		path: path.questions,
	},
	{
		title: 'Уведомления',
		path: path.therapySettings,
	},
	{
		title: 'Тарифы и оплата',
		path: path.rates,
	},
	{
		title: 'Служба поддержки',
		path: path.request,
	},
	{
		title: 'Мои данные',
		path: path.userData,
	},
];
