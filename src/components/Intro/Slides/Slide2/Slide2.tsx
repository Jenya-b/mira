import { FC } from 'react';

import { Button, Subtitle, Title } from '../styles';

import { Block, Wrapper } from './Slide2.styled';

interface SlideProps {
	handleNext: () => void;
}

export const Slide2: FC<SlideProps> = ({ handleNext }) => (
	<Wrapper>
		<Block>
			<Title className="black">5 минут</Title>
			<Subtitle className="black">
				Пользователи отмечают улучшение самочувствия после первой 5 минутной сессии.
			</Subtitle>
		</Block>
		<Block>
			<Title>87%</Title>
			<Subtitle>87% людей замечают стабильное улучшение настроения после 14 сессий.</Subtitle>
			<Button onClick={handleNext}>Продолжить</Button>
		</Block>
	</Wrapper>
);
