import { FC } from 'react';

import { useAppDispatch } from '@/store';
import { TrainingParam, setTrainingBlock } from '@/store/training';

import { Content, TextBlock, Wrapper } from './InputBlock.styled';

export const InputBlock: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<Wrapper>
			<Content>
				<TextBlock>
					<p>Это поле для ввода сообщений.</p>
					<p>Отсюда начинается общение с Мирой 👍🏼</p>
					<p>Можно ввести текст или записать голосовое сообщение</p>
				</TextBlock>
				<button onClick={() => dispatch(setTrainingBlock(TrainingParam.MENU))}>Ок, дальше</button>
			</Content>
		</Wrapper>
	);
};
