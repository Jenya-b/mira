import { FC, useEffect, useState } from 'react';

import eveningIcon from '@/assets/images/icons/evening.svg';
import morningIcon from '@/assets/images/icons/morning.svg';
import { periods } from '@/constants/settings';

import { Controls, Desc, Periods, Time, Title, Wrapper } from './Card.styled';

interface CardProps {
	title: string;
	subtitle: string;
	activeSettings: boolean;
}

export const Card: FC<CardProps> = ({ subtitle, title, activeSettings }) => {
	const [time, setTime] = useState('13:30');
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

	return (
		<Wrapper>
			<Title>{title}</Title>
			<Desc>{subtitle}</Desc>
			<Controls>
				<img src={isEvening ? eveningIcon : morningIcon} alt="" />
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
