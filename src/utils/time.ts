export const getTimeUTC = (time: string): string => {
	const [h, m] = time.split(':');
	const tz = new Date().getTimezoneOffset() / 60;
	const date = new Date(0, 0, 0, Number(h) + tz, Number(m));

	const hoursUTC = date.getHours();
	const minutesUTC = date.getMinutes();

	return `${hoursUTC < 10 ? `0${hoursUTC}` : hoursUTC}:${minutesUTC < 10 ? `0${minutesUTC}` : minutesUTC}:00`;
};

export const getMyTime = (time: string): string => {
	const [h, m] = time.split(':');
	const tz = new Date().getTimezoneOffset() / 60;
	const date = new Date(0, 0, 0, Number(h) - tz, Number(m));

	const hours = date.getHours();
	const minutes = date.getMinutes();

	return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:00`;
};
