import { FC } from 'react';

import { useResize } from '@/hooks/useResize';
import { useAppDispatch } from '@/store';
import { TrainingParam, setTrainingBlock } from '@/store/training';

import { Content, TextBlock, Wrapper } from './MicrophoneBlock.styled';

export const MicrophoneBlock: FC = () => {
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
					<p>С помощью этой кнопки можно составить сообщение, используя голос</p>
				</TextBlock>
				<button onClick={handleClick}>Ок, дальше</button>
			</Content>
		</Wrapper>
	);
};
