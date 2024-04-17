import { FC } from 'react';

import { useAppDispatch } from '@/store';
import { TrainingParam, setTrainingBlock } from '@/store/training';

import { Content, TextBlock, Wrapper } from './MicrophoneBlock.styled';

export const MicrophoneBlock: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<Wrapper>
			<Content>
				<TextBlock>С помощью этой кнопки можно составить сообщение, используя голос</TextBlock>
				<button onClick={() => dispatch(setTrainingBlock(TrainingParam.MENU))}>Ок, дальше</button>
			</Content>
		</Wrapper>
	);
};
