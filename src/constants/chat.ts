import arrowIcon from '@/assets/images/icons/arrow-left.svg';
import bookIcon from '@/assets/images/icons/book.svg';
import messageIcon from '@/assets/images/icons/bubble-message.svg';
import chatIcon from '@/assets/images/icons/chat.svg';

export const randomHints = [
	'Я потерял работу',
	'Меня бросил(а) возлюбленный(ая)',
	'Я выгорел на работе',
	'Я часто ссорюсь с родственниками',
];

export const complaintList = [
	'Трудно было понять, что делать',
	'Ответы психолога казались неуместными',
	'Я не понял(а), в чем смысл сессии',
	'Были технические проблемы',
];

export const descEndSession = [
	'Прохождение новых сессий',
	'Виртуальный тренажер',
	'Регулярные напоминания',
	'Замена неработающих мыслей',
	'Еженедельный обзор',
];

export enum FurtherActionsEnum {
	MAIN,
	HELP,
	PRACTICE,
}

export interface FurtherActions {
	img?: string;
	title: string;
	redirection: FurtherActionsEnum;
}

export const furtherActionsMain: FurtherActions[] = [
	{
		img: bookIcon,
		title: 'Проверить другую мысль',
		redirection: FurtherActionsEnum.MAIN,
	},
	{
		img: messageIcon,
		title: 'Обсудить новую ситуацию',
		redirection: FurtherActionsEnum.MAIN,
	},
	{
		img: chatIcon,
		title: 'Приступить к тренировке',
		redirection: FurtherActionsEnum.PRACTICE,
	},
	{
		img: chatIcon,
		title: 'Нужна помощь',
		redirection: FurtherActionsEnum.HELP,
	},
];

export const furtherActionsPractice: FurtherActions[] = [
	{
		title: 'Копинг-карточки',
		redirection: FurtherActionsEnum.PRACTICE,
	},
	{
		title: 'Виртуальный тренажер',
		redirection: FurtherActionsEnum.PRACTICE,
	},
	{
		img: arrowIcon,
		title: 'Вернуться назад',
		redirection: FurtherActionsEnum.MAIN,
	},
];

export const furtherActionsHelp: FurtherActions[] = [
	{
		title: 'Новая мысль плохо работает',
		redirection: FurtherActionsEnum.HELP,
	},
	{
		title: 'У меня вопрос',
		redirection: FurtherActionsEnum.HELP,
	},
	{
		img: arrowIcon,
		title: 'Вернуться назад',
		redirection: FurtherActionsEnum.MAIN,
	},
];
