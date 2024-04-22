import { FC } from 'react';

import { Button, Discount, Services, CardTitle, CardWrap, Price } from './Card.styled';

interface CardProps {
	title: string;
	services: {
		text: string;
		icon: string;
	}[];
	price: number;
	discount: number;
	handleSubmit: () => void;
}

export const Card: FC<CardProps> = ({ discount, price, services, title, handleSubmit }) => (
	<CardWrap>
		{discount ? <Discount>скидка {discount}%</Discount> : <span />}
		<CardTitle>{title}</CardTitle>
		<Services>
			{services.map(({ icon, text }) => (
				<li key={text}>
					<img src={icon} alt="" />
					<span>{text}</span>
				</li>
			))}
		</Services>
		<Button onClick={handleSubmit}>Купить {title}</Button>
		<Price>
			<span>{price} ₽</span>
			<span>за {title}</span>
		</Price>
	</CardWrap>
);
