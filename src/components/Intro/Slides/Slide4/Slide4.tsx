import { FC } from 'react';

import { Button, Subtitle, Title } from '../styles';

import { Block, Wrapper } from './Slide4.styled';

interface SlideProps {
	handleNextSlider: () => void;
}

export const Slide4: FC<SlideProps> = ({ handleNextSlider }) => (
	<Wrapper>
		<Block>
			<Title className="black">Суть КПТ</Title>
			<Subtitle className="black">Наши мысли определяют наше отношение к жизни.</Subtitle>
		</Block>
		<Block>
			<Subtitle>
				КПТ научит вас осознавать и переосмысливать негативные мысли, преобразуя их в более
				реалистичные и положительные убеждения.
			</Subtitle>
			<Button onClick={handleNextSlider}>Я готов(а)</Button>
		</Block>
	</Wrapper>
);
