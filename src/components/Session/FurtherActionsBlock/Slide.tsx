import { FC, memo } from 'react';

import { FurtherActions, FurtherActionsEnum } from '@/constants/chat';
import { useAppDispatch } from '@/store';
import { SessionBlocks, setSessionBlock } from '@/store/chat';

import { List } from './FurtherActionsBlock.styled';

interface SlideProps {
	list: FurtherActions[];
	handleChangeSlide: (item: FurtherActionsEnum) => void;
	createSession?: () => void;
}

export const Slide: FC<SlideProps> = memo(({ list, handleChangeSlide, createSession }) => {
	const dispatch = useAppDispatch();

	const handleClick = (
		redirection: FurtherActionsEnum | undefined,
		sessionBlocks: SessionBlocks | undefined,
		addNewSession?: boolean | undefined
	): void => {
		if (addNewSession && createSession) {
			createSession();
		} else if (redirection !== undefined) {
			handleChangeSlide(redirection);
		} else if (sessionBlocks !== undefined) {
			dispatch(setSessionBlock(sessionBlocks));
		}
	};

	return (
		<List>
			{list.map((i) => (
				<li key={i.title}>
					<button onClick={() => handleClick(i.redirection, i.sessionBlocks, i.addNewSession)}>
						{i.img && <img src={i.img} alt="" />}
						<span>{i.title}</span>
					</button>
				</li>
			))}
		</List>
	);
});
