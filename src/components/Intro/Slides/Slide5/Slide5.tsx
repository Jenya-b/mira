import { FC, FormEvent, useEffect, useState } from 'react';

import { useUpdateUserMutation } from '@/services/api/user';
import { InputPrimary, LabelPrimary } from '@/styles/components';

import { Title, Wrapper, Form, Button } from './Slide5.styled';

interface Slide1Props {
	handleNext: () => void;
}

export const Slide5: FC<Slide1Props> = ({ handleNext }) => {
	const [userName, setUserName] = useState('');
	const [fetchUpdateUser, { isSuccess }] = useUpdateUserMutation();

	useEffect(() => {
		if (isSuccess) {
			handleNext();
		}
	}, [isSuccess]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (userName) {
			fetchUpdateUser({ first_name: userName });
		}
	};

	return (
		<Wrapper>
			<Title>Привет! Я – Мира, цифровой психолог</Title>
			<Form onSubmit={handleSubmit}>
				<p>Все наши беседы конфиденциальны и анонимны.</p>
				<LabelPrimary>
					<span>Ваше имя</span>
					<InputPrimary
						placeholder="Как я могу к вам обращаться?"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</LabelPrimary>
				<Button>Продолжить</Button>
			</Form>
		</Wrapper>
	);
};
