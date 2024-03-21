import { FC, useState } from 'react';

import {
	ButtonPrimary,
	Controls,
	Form,
	InfoBlock,
	Input,
	Label,
	Subtitle,
	Timer,
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
				<Timer style={{ marginTop: '-0.5rem' }}>
					Отправить повторное СМС через <span>0:53</span>
				</Timer>
				<ButtonPrimary>Продолжить</ButtonPrimary>
			</Controls>
		</Form>
	);
};
