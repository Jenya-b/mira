import { FC } from 'react';

import { Button, Discount, Services, CardTitle, CardWrap, Price } from './Rates.styled';

interface CardProps {
	title: string;
	services: string[];
	price: number;
	discount: number;
}

export const Card: FC<CardProps> = ({ discount, price, services, title }) => (
	<CardWrap>
		{discount ? <Discount>скидка {discount}%</Discount> : <span />}
		<CardTitle>{title}</CardTitle>
		<Services>
			{services.map((item) => (
				<li key={item}>
					<span>{item}</span>
				</li>
			))}
		</Services>
		<Button>Купить {title}</Button>
		<Price>
			<span>{price} ₽</span>
			<span>за {title}</span>
		</Price>
	</CardWrap>
);
