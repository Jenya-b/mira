import { FC, FormEvent } from 'react';

import { InputPrimary, LabelPrimary } from '@/styles/components';

import { Title, Wrapper, Form, Button } from './Slide5.styled';

interface Slide1Props {
	handleNext: () => void;
}

export const Slide5: FC<Slide1Props> = ({ handleNext }) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		handleNext();
	};

	return (
		<Wrapper>
			<Title>Привет! Я – Мира, цифровой психолог</Title>
			<Form onSubmit={handleSubmit}>
				<p>Все наши беседы конфиденциальны и анонимны.</p>
				<LabelPrimary>
					<span>Ваше имя</span>
					<InputPrimary placeholder="Как я могу к вам обращаться?" />
				</LabelPrimary>
				<Button>Продолжить</Button>
			</Form>
		</Wrapper>
	);
};
