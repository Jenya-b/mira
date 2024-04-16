import { FC, useState } from 'react';

import { Button } from '../styles';

import { goals } from '@/constants/intro';

import { Block, Subtitle, Title, Wrapper } from './Slide6.styled';

interface SlideProps {
	handleNext: () => void;
}

export const Slide6: FC<SlideProps> = ({ handleNext }) => {
	const [activeButtons, setActiveButtons] = useState<string[]>([]);

	const handleActiveButtons = (text: string): void => {
		if (activeButtons.includes(text)) {
			const buttons = activeButtons.filter((item) => item !== text);
			setActiveButtons(buttons);
		} else {
			setActiveButtons([...activeButtons, text]);
		}
	};

	return (
		<Wrapper>
			<Block>
				{goals.map(({ id, text }) => (
					<button
						key={id}
						onClick={() => handleActiveButtons(text)}
						className={activeButtons.includes(text) ? 'active' : ''}
					>
						{text}
					</button>
				))}
			</Block>
			<Block>
				<Title>Выберите вашу цель</Title>
				<Subtitle>Чего вы хотели бы добиться, общаясь с цифровым психологом?</Subtitle>
				<Button onClick={handleNext}>Продолжить</Button>
			</Block>
		</Wrapper>
	);
};
