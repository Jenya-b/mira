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
	'Психолог странно отвечал',
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

export const messagesList = [
	{
		logoParam: 'user',
		text: 'Подскажи конкретные шаги, как я себе могу чем-то помочь',
		searchBlock: [],
	},
	{
		logoParam: 'mira',
		text: 'Конечно, я готов помочь. Пожалуйста, расскажи мне, в чем именно твоя проблема или что тебя беспокоит, и мы вместе попытаемся найти решение.',
		searchBlock: [],
	},
	{
		logoParam: 'user',
		text: 'Спасибо, а еще?',
		searchBlock: [],
	},
	{
		logoParam: 'mira',
		text: 'В ходе нашего общения я обратил внимание на некоторые мысли, которые, возможно, относятся к искажению мышления "Долженствование", "Катастрофизация". Осознание и последующее изменение этих мыслей может значительно улучшить ваше эмоциональное состояние.		Для достижения наилучшего результата выберите из предложенного ниже списка одну мысль, которая вас больше всего волнует. Затем мы вместе приступим к ее исследованию.',
		searchBlock: [
			{
				title: 'Долженствование',
				list: ['Я должен много зарабатывать', 'Все должны меня уважать'],
			},
			{
				title: 'Катастрофизация',
				list: ['Я должен много зарабатывать', 'Все должны меня уважать'],
			},
		],
	},
];

export const messagesListTraining = [
	{
		logoParam: 'user',
		text: 'Подскажи конкретные шаги, как я себе могу чем-то помочь',
		searchBlock: [],
	},
	{
		logoParam: 'mira',
		text: 'Конечно, я готов помочь. Пожалуйста, расскажи мне, в чем именно твоя проблема или что тебя беспокоит, и мы вместе попытаемся найти решение.',
		searchBlock: [],
	},
	{
		logoParam: 'user',
		text: 'Спасибо, а еще?',
		searchBlock: [],
	},
];
