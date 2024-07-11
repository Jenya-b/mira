import { FC } from 'react';

import { Rate } from '@/services/api/rate';

import { Button, Discount, Services, CardTitle, CardWrap, Price } from './Card.styled';

interface CardProps extends Rate {
	handleSubmit: () => void;
}

export const Card: FC<CardProps> = ({
	count_session,
	descriptions,
	price,
	short_description,
	handleSubmit,
}) => (
	<CardWrap>
		{short_description ? <Discount>{short_description}</Discount> : <span />}
		<CardTitle>{count_session} сессий</CardTitle>
		<Services>
			{descriptions.map(({ icon, text }) => (
				<li key={text}>
					<img src={icon} alt="" />
					<span>{text}</span>
				</li>
			))}
		</Services>
		<Button onClick={handleSubmit}>Купить {count_session}</Button>
		<Price>
			<span>{price} ₽</span>
			<span>за {count_session} сессий</span>
		</Price>
	</CardWrap>
);
