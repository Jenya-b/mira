import { FC } from 'react';

import { Button, Subtitle, Title } from '../styles';

import { Block, Wrapper } from './Slide7.styled';

interface SlideProps {
	handleNext: () => void;
}

export const Slide7: FC<SlideProps> = ({ handleNext }) => (
	<Wrapper>
		<Block>
			<Title className="black">Важно</Title>
			<Subtitle className="black">
				Цифровой психолог Мира не идеальна, как и все в этом мире.
			</Subtitle>
		</Block>
		<Block>
			<Subtitle>
				Однако с каждой пройденной сессией Мира совершенствуется, делая терапию всё более
				персонализированной и эффективной.
			</Subtitle>
			<Button onClick={handleNext}>Приступить</Button>
		</Block>
	</Wrapper>
);
