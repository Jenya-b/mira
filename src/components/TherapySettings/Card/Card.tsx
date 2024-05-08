import { ChangeEvent, FC, useEffect, useState } from 'react';

import eveningIcon from '@/assets/images/icons/evening.svg';
import morningIcon from '@/assets/images/icons/morning.svg';

import { Controls, Desc, Periods, Time, Title, Wrapper } from './Card.styled';

interface IPeriods {
	value: number;
	text: string;
}

interface CardProps {
	title: string;
	subtitle: string;
	activeSettings: boolean;
	time: string | null | undefined;
	days: number | undefined;
	handleChangeTime: (e: ChangeEvent<HTMLInputElement>) => void;
	handleChangeDays: (e: ChangeEvent<HTMLSelectElement>) => void;
	periods: IPeriods[];
}

export const Card: FC<CardProps> = ({
	subtitle,
	title,
	activeSettings,
	time,
	days,
	handleChangeTime,
	handleChangeDays,
	periods,
}) => {
	const [isEvening, setIsEvening] = useState(false);

	useEffect(() => {
		if (!time) {
			return;
		}

		const hours = Number(time.split(':')[0]);

		if (hours < 18 && hours >= 6) {
			setIsEvening(false);
		} else {
			setIsEvening(true);
		}
	}, [time]);

	if (typeof time !== 'string') {
		return <></>;
	}

	return (
		<Wrapper>
			<Title>{title}</Title>
			<Desc>{subtitle}</Desc>
			<Controls>
				<img src={isEvening ? eveningIcon : morningIcon} alt="" />
				<Time type="time" value={time} onChange={handleChangeTime} disabled={!activeSettings} />
				<Periods disabled={!activeSettings} onChange={handleChangeDays} defaultValue={days}>
					{periods.map(({ text, value }) => (
						<option key={text} value={value}>
							{text}
						</option>
					))}
				</Periods>
			</Controls>
		</Wrapper>
	);
};
