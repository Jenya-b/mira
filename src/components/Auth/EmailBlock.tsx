import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { path } from '@/router/path';
import { useUpdateUserMutation } from '@/services/api/user';
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
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { email } = useAppSelector((state) => state.auth);
	const [fetchUpdateUser, { isSuccess }] = useUpdateUserMutation();

	useEffect(() => {
		if (isSuccess) {
			navigate(path.home);
		}
	}, [isSuccess]);

	const handleSubmit = (): void => {
		if (email) {
			fetchUpdateUser({ email });
		}
	};

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
				<ButtonPrimary onClick={handleSubmit}>Продолжить</ButtonPrimary>
			</Controls>
		</Wrapper>
	);
};
