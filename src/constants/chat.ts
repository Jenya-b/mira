import arrowIcon from '@/assets/images/icons/arrow-left.svg';
import bookIcon from '@/assets/images/icons/book.svg';
import messageIcon from '@/assets/images/icons/bubble-message.svg';
import chatIcon from '@/assets/images/icons/chat.svg';
import { SessionBlocks } from '@/store/chat';

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
	HOME,
	MAIN,
	HELP,
	PRACTICE,
}

export interface FurtherActions {
	img?: string;
	title: string;
	redirection?: FurtherActionsEnum;
	sessionBlocks?: SessionBlocks;
	addNewSession?: boolean;
}

export const homeActions: FurtherActions[] = [
	{
		img: bookIcon,
		title: 'Мысли прошлой сессии',
	},
	{
		img: messageIcon,
		title: 'Начать новую сессию',
		addNewSession: true,
		sessionBlocks: SessionBlocks.FIRST,
	},
	{
		img: chatIcon,
		title: 'Приступить к практике',
		redirection: FurtherActionsEnum.PRACTICE,
	},
	{
		img: chatIcon,
		title: 'Нужна помощь',
		redirection: FurtherActionsEnum.HELP,
	},
];

export const furtherActionsMain: FurtherActions[] = [
	{
		img: bookIcon,
		title: 'Проверить другую мысль',
	},
	{
		img: messageIcon,
		title: 'Обсудить новую ситуацию',
	},
	{
		img: chatIcon,
		title: 'Приступить к практике',
		redirection: FurtherActionsEnum.PRACTICE,
	},
	{
		img: chatIcon,
		title: 'Нужна помощь',
		redirection: FurtherActionsEnum.HELP,
	},
];

const Practice: FurtherActions[] = [
	{
		title: 'Копинг-карточки',
	},
	{
		title: 'Виртуальный тренажер',
	},
];

export const furtherActionsPractice: FurtherActions[] = [
	...Practice,
	{
		img: arrowIcon,
		title: 'Вернуться назад',
		redirection: FurtherActionsEnum.HOME,
	},
];

export const furtherActionsPracticeHome: FurtherActions[] = [
	...Practice,
	{
		img: arrowIcon,
		title: 'Вернуться назад',
		redirection: FurtherActionsEnum.HOME,
	},
];

const Help: FurtherActions[] = [
	{
		title: 'Новая мысль плохо работает',
	},
	{
		title: 'У меня вопрос',
	},
];

export const furtherActionsHelp: FurtherActions[] = [
	...Help,
	{
		img: arrowIcon,
		title: 'Вернуться назад',
		redirection: FurtherActionsEnum.HOME,
	},
];

export const furtherActionsHelpHome: FurtherActions[] = [
	...Help,
	{
		img: arrowIcon,
		title: 'Вернуться назад',
		redirection: FurtherActionsEnum.HOME,
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
		id: 1,
		logoParam: 'user',
		text: 'Подскажи конкретные шаги, как я себе могу чем-то помочь',
		searchBlock: [],
	},
	{
		id: 2,
		logoParam: 'mira',
		text: 'Конечно, я готов помочь. Пожалуйста, расскажи мне, в чем именно твоя проблема или что тебя беспокоит, и мы вместе попытаемся найти решение.',
		searchBlock: [],
	},
	{
		id: 3,
		logoParam: 'user',
		text: 'Спасибо, а еще?',
		searchBlock: [],
	},
];

export const instructionsThoughtsList = [
	'Инструкция по созданию новых мыслей',
	'Новая мысль должна быть краткой (до 7 слов, кроме предлогов и местоимений) и легкой для запоминания.',
	'Мысль должна отражать реальность, учитывая жизненные возможности и ограничения.',
	'Мысль должна быть либо нейтральной, либо позитивной, избегая катастрофизма и негатива.',
	'В формулировке новой мысли следует избегать слов, навязывающих обязанности, таких как "должен", "обязан" и аналогичных.',
	'Избегайте абсолютных терминов, таких как "всегда", "никогда", "все" или схожих по смыслу.',
	'Мысль должна быть утверждением, а не вопросом.',
];

export const furtherActionsList = [
	'Что делать после  сессии?',
	'При возникновении или обдумывании ситуации, похожей на описанную в ходе сессии, старайтесь повторять в уме новую мысль, созданную сегодня. Не беспокойтесь, если сразу не удастся — это совершенно нормально.',
	'В чем смысл замены мыслей?',
	'Целью замены мыслей является модификация вашей когнитивной модели, чтобы она перестала автоматически вызывать негативные эмоции в ответ на различные жизненные события.',
	'Почему это мне поможет?',
	'Процесс замены мыслей основан на физиологических принципах работы мозга: регулярный повтор новых мыслей способствует формированию новых нейронных связей и созданию новых поведенческих паттернов. ',
	'Как часто нужно практиковаться?',
	'Ежедневная практика поможет вам довести навык замены мыслей до автоматизма. Чем больше мыслей вы проработаете вместе с Мирой, тем скорее достигнете желаемого результата.',
	'Как не забывать заниматься?',
	'Мы сами напомним в нужное время. Просто включите уведомления о терапии, чтобы обеспечить ее эффективность и последовательность.',
	'Когда я увижу результат?',
	'Обычно, при ежедневной практике, заметные изменения происходят достаточно быстро. Вы просто почувствуете, что проблема вас больше не беспокоит.',
	'Что делать, если старые мысли возвращаются?',
	'Не беспокойтесь, если старые мысли время от времени возвращаются – это часть процесса. Главное – продолжать практиковаться и напоминать себе о позитивных сторонах новых мыслей.',
];
