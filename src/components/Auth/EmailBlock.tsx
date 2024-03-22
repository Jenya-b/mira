import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { setEmail } from '@/store/auth';

import {
	ButtonPrimary,
	Controls,
	Wrapper,
	InfoBlock,
	Input,
	Label,
	Subtitle,
	Title,
} from './index.styled';

export const EmailBlock: FC = () => {
	const dispatch = useAppDispatch();
	const { email } = useAppSelector((state) => state.auth);

	return (
		<Wrapper>
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
						onChange={(e) => dispatch(setEmail(e.target.value))}
						placeholder="myemail@email.com"
					/>
				</Label>

				<ButtonPrimary>Продолжить</ButtonPrimary>
			</Controls>
		</Wrapper>
	);
};
