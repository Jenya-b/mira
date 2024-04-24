import { FC, useEffect, useState } from 'react';

import { Card } from '@/components/Practice/Card/Card';
import { copingCardList } from '@/constants/training';
import { useAppDispatch, useAppSelector } from '@/store';
import { setCardTrainingBlock, setIsTraining } from '@/store/practice';

import { Button, Content, TextBlock, Wrapper } from './CopingCard.styled';

export const CopingCardBlock: FC = () => {
	const dispatch = useAppDispatch();
	const { cardTrainingBlock } = useAppSelector((state) => state.practice);
	const [textBtn, setTextBtn] = useState('Дальше');

	useEffect(() => {
		switch (cardTrainingBlock) {
			case 0:
			case 3:
				setTextBtn('Дальше');
				break;
			case 1:
				setTextBtn('Понятно');
				break;
			case 2:
				setTextBtn('Хорошо');
				break;
			case 4:
				setTextBtn('Продолжить');
				break;
			default:
				break;
		}
	}, [cardTrainingBlock]);

	const handleClick = (): void => {
		if (cardTrainingBlock === 4) {
			dispatch(setIsTraining(false));
		} else {
			dispatch(setCardTrainingBlock(cardTrainingBlock + 1));
		}
	};

	return (
		<Wrapper>
			<Content>
				<TextBlock>{copingCardList[cardTrainingBlock]}</TextBlock>
				<Card
					date="02.02.2024"
					favorites
					btnText1="Хочу реализовать потенциал"
					btnText2="Должен много зарабатывать"
					btnText3="Не могу получить повышение"
					btnText4="Новая мысль плохо работает"
					isTraining
				/>
				<Button onClick={handleClick}>{textBtn}</Button>
			</Content>
		</Wrapper>
	);
};
