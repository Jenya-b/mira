import chrome1 from '@/assets/images/installPWA/chrome1.png';
import chrome2 from '@/assets/images/installPWA/chrome2.png';
import chrome3 from '@/assets/images/installPWA/chrome3.png';
import safari1 from '@/assets/images/installPWA/safari1.png';
import safari2 from '@/assets/images/installPWA/safari2.png';
import safari3 from '@/assets/images/installPWA/safari3.png';
import safari4 from '@/assets/images/installPWA/safari4.png';

export interface IData {
	title: string;
	imgSrc: string;
	buttonText: string;
}

export const dataIos: IData[] = [
	{
		imgSrc: safari1,
		title: 'Откройте сайт «Мира» в браузере Safari',
		buttonText: 'Продолжить',
	},
	{
		imgSrc: safari2,
		title: 'Выберите «Поделиться» на панели вкладок',
		buttonText: 'Продолжить',
	},
	{
		imgSrc: safari3,
		title: 'Нажмите на кнопку «На экран Домой»',
		buttonText: 'Продолжить',
	},
	{
		imgSrc: safari4,
		title: 'Нажмите «Добавить». Затем откройте приложение «Мира»',
		buttonText: 'Отлично!',
	},
];

export const dataAndroid: IData[] = [
	{
		imgSrc: chrome1,
		title: 'Откройте сайт «Мира» в Google Chrome',
		buttonText: 'Продолжить',
	},
	{
		imgSrc: chrome2,
		title: 'Нажмите на «Меню» (3 точки) в углу экрана',
		buttonText: 'Продолжить',
	},
	{
		imgSrc: chrome3,
		title: 'Нажмите «Добавить на экран» или «Установить»',
		buttonText: 'Отлично!',
	},
];
