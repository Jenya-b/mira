import { FC } from 'react';

import { useAppDispatch } from '@/store';
import { TrainingParam, setTrainingBlock } from '@/store/training';

import { Content, TextBlock, Wrapper } from './MenuBlock.styled';

export const MenuBlock: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<Wrapper>
			<Content>
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
					<circle cx="20" cy="20" r="20" fill="#4EB97F" />
					<rect x="11.0879" y="17" width="18.1431" height="2" rx="1" fill="white" />
					<rect x="11.0879" y="22" width="18.1431" height="2" rx="1" fill="white" />
				</svg>
				<TextBlock>Это меню. Здесь можно найти все настройки и разделы.</TextBlock>
				<button onClick={() => dispatch(setTrainingBlock(TrainingParam.SESSION))}>
					Ок, дальше
				</button>
			</Content>
		</Wrapper>
	);
};
