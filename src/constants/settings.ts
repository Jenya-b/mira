export enum TimeOfDay {
	MORNING,
	AFTERNOON,
	EVENING,
}

export const timeOfDayData = {
	[TimeOfDay.MORNING]: 'Утро',
	[TimeOfDay.AFTERNOON]: 'День',
	[TimeOfDay.EVENING]: 'Вечер',
};

export const periods = [
	{
		value: 3,
		text: '3 раза',
	},
	{
		value: 5,
		text: '5 раз',
	},
	{
		value: 7,
		text: '7 раз',
	},
];
