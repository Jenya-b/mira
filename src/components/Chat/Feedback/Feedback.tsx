import { FC, useEffect } from 'react';

import { smiles } from '@/constants/feedback';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { useUpdateSessionMutation } from '@/services/api/session';
import { useAppDispatch, useAppSelector } from '@/store';
import { SessionBlocks, setSessionBlock } from '@/store/chat';

import { List } from './Feedback.styled';

export const Feedback: FC = () => {
	const dispatch = useAppDispatch();
	const { currentSession } = useAppSelector((state) => state.chat);
	const [fetchUpdateResult, { isSuccess }] = useUpdateSessionMutation();

	useEffect(() => {
		if (isSuccess) {
			dispatch(setSessionBlock(SessionBlocks.CARDS));
		}
	}, [isSuccess]);

	const updateResult = (result: number): void => {
		if (currentSession === null) {
			return;
		}

		fetchUpdateResult({ result, id: currentSession.id });
	};

	return (
		<WithChat title="Как вы себя чувствуете после сессии?">
			<List>
				{smiles.map(({ img, title, result }) => (
					<li key={title}>
						<button onClick={() => updateResult(result)}>
							<img src={img} alt="smile" />
							<span>{title}</span>
						</button>
					</li>
				))}
			</List>
		</WithChat>
	);
};
