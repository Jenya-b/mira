import { FC } from 'react';

import { useAppDispatch } from '@/store';
import { TrainingParam, setTrainingBlock } from '@/store/training';

import { Content, TextBlock, Wrapper } from './SessionBlock.styled';

export const SessionBlock: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<Wrapper>
			<Content>
				<TextBlock>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="69"
						height="12"
						viewBox="0 0 69 12"
						fill="none"
					>
						<path
							d="M68 7C68.5523 7 69 6.55228 69 6C69 5.44772 68.5523 5 68 5V7ZM11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6ZM68 5L6 5V7L68 7V5Z"
							fill="white"
						/>
					</svg>
					<p>Здесь можно увидеть количество доступных сессий или начать новую. 👌🏼</p>
				</TextBlock>
				<button onClick={() => dispatch(setTrainingBlock(TrainingParam.CARD))}>Ок, дальше</button>
			</Content>
		</Wrapper>
	);
};
