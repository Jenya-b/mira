import { FC, useState } from 'react';

import eveningIcon from '@/assets/images/icons/evening.svg';
import morningIcon from '@/assets/images/icons/morning.svg';
import { TimeOfDay, periods, timeOfDayData } from '@/constants/settings';

import { Controls, Desc, Periods, Time, TimeDay, Title, Wrapper } from './Card.styled';

interface CardProps {
	title: string;
	subtitle: string;
	timeOfDay: TimeOfDay;
	activeSettings: boolean;
}

export const Card: FC<CardProps> = ({ subtitle, timeOfDay, title, activeSettings }) => {
	const [time, setTime] = useState('13:30');

	return (
		<Wrapper>
			<Title>{title}</Title>
			<Desc>{subtitle}</Desc>
			<Controls>
				<img src={timeOfDay === TimeOfDay.MORNING ? morningIcon : eveningIcon} alt="" />
				<TimeDay>{timeOfDayData[timeOfDay]}</TimeDay>
				<Time
					type="time"
					value={time}
					onChange={(e) => setTime(e.target.value)}
					disabled={!activeSettings}
				/>
				<Periods disabled={!activeSettings}>
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
