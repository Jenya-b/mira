import { FC, useState } from 'react';

import {
	ButtonPrimary,
	Controls,
	Form,
	InfoBlock,
	Input,
	Label,
	Subtitle,
	Title,
} from './index.styled';

export const EmailBlock: FC = () => {
	const [email, setEmail] = useState('');

	return (
		<Form>
			<InfoBlock>
				<Title>Будьте в курсе</Title>
				<Subtitle>
					Введите ваш email, чтобы продолжить. Мы его используем только для важных уведомлений.
				</Subtitle>
			</InfoBlock>
			<Controls>
				<Label>
					<span>Ваш адрес электронной почты</span>
					<Input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="myemail@email.com"
					/>
				</Label>

				<ButtonPrimary>Продолжить</ButtonPrimary>
			</Controls>
		</Form>
	);
};
