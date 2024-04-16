import { FC } from 'react';

import { useResize } from '@/hooks/useResize';
import { useAppDispatch } from '@/store';
import { TrainingParam, setTrainingBlock } from '@/store/training';

import { Content, TextBlock, Wrapper } from './InputBlock.styled';

export const InputBlock: FC = () => {
	const dispatch = useAppDispatch();
	const [width] = useResize();

	const handleClick = (): void => {
		if (width > 1000) {
			dispatch(setTrainingBlock(TrainingParam.MENU));
		} else {
			dispatch(setTrainingBlock(TrainingParam.MICROPHONE));
		}
	};

	return (
		<Wrapper>
			<Content>
				<TextBlock>
					<p>Это поле для ввода сообщений.</p>
					<p>Отсюда начинается общение с Мирой 👍🏼</p>
					{width > 1000 && <p>Можно ввести текст или записать голосовое сообщение</p>}
				</TextBlock>
				<button onClick={handleClick}>Ок, дальше</button>
			</Content>
		</Wrapper>
	);
};
