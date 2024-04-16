import { FC } from 'react';

import { useAppDispatch } from '@/store';
import { TrainingParam, setTrainingBlock } from '@/store/training';

import { Content, TextBlock, Wrapper } from './MenuBlock.styled';

export const MenuBlock: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<Wrapper>
			<Content>
				<TextBlock>Это меню. Здесь можно найти все настройки и разделы.</TextBlock>
				<button onClick={() => dispatch(setTrainingBlock(TrainingParam.SESSION))}>
					Ок, дальше
				</button>
			</Content>
		</Wrapper>
	);
};
