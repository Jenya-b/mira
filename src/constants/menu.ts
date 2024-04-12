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
		title: 'Служба поддержки',
		path: path.request,
	},
	{
		title: 'Мои данные',
		path: path.userData,
	},
];
