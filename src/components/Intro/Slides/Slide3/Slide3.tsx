import { FC } from 'react';

import { Button, Subtitle, Title } from '../styles';

import img from '@/assets/images/intro-slide-3.png';

import { Block, Wrapper } from './Slide3.styled';

interface SlideProps {
	handleNext: () => void;
}

export const Slide3: FC<SlideProps> = ({ handleNext }) => (
	<Wrapper>
		<Block>
			<Title>КПТ</Title>
			<Subtitle>
				Наш сервис использует когнитивно-поведенческую терапию (КПТ), наиболее научный метод
				улучшения психического здоровья.
			</Subtitle>
			<Button onClick={handleNext}>Понятно</Button>
		</Block>
		<Block>
			<img src={img} alt="" />
		</Block>
	</Wrapper>
);
