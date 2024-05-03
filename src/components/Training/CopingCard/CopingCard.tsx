import { FC, useEffect, useState } from 'react';

import { Card } from '@/components/Practice/Card/Card';
import { copingCardList } from '@/constants/training';
import { DisabledBg, FilterBg } from '@/pages/Training/Training.styled';
import { useAppDispatch, useAppSelector } from '@/store';
import { TrainingBlock, setCardTrainingBlock, setTrainingBlock } from '@/store/practice';

import { Button, CardWrap, Content, TextBlock, Wrapper } from './CopingCard.styled';

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
			dispatch(setTrainingBlock(TrainingBlock.FILTER));
		} else {
			dispatch(setCardTrainingBlock(cardTrainingBlock + 1));
		}
	};

	return (
		<Wrapper>
			<Content>
				<TextBlock>{copingCardList[cardTrainingBlock]}</TextBlock>
				<CardWrap>
					<Card
						date="02.02.2024"
						favorites
						btnText1="Хочу реализовать потенциал"
						btnText2="Должен много зарабатывать"
						btnText3="Не могу получить повышение"
						btnText4="Новая мысль плохо работает"
						isTraining
					/>
					{cardTrainingBlock !== 0 && (
						<DisabledBg className="coping">
							<FilterBg className="coping" />
						</DisabledBg>
					)}
				</CardWrap>
				<Button onClick={handleClick}>{textBtn}</Button>
			</Content>
		</Wrapper>
	);
};
