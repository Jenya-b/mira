import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { smiles } from '@/constants/feedback';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { path } from '@/router/path';
import { useUpdateSessionMutation } from '@/services/api/session';
import { useAppDispatch, useAppSelector } from '@/store';
import { SessionBlocks, setSessionBlock } from '@/store/chat';

import { List } from './Feedback.styled';

export const Feedback: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { currentSession } = useAppSelector((state) => state.chat);
	const { user } = useAppSelector((state) => state.user);
	const [fetchUpdateResult, { isSuccess }] = useUpdateSessionMutation();

	useEffect(() => {
		if (isSuccess) {
			dispatch(setSessionBlock(SessionBlocks.CARDS));
		}
	}, [isSuccess]);

	const handleNavigate = (): void => {
		if (user && user.training_after_session_passed) {
			dispatch(setSessionBlock(SessionBlocks.HOME));
			navigate(path.home);
		} else {
			dispatch(setSessionBlock(SessionBlocks.CARDS));
		}
	};

	const updateResult = (result: number): void => {
		if (currentSession === null) {
			return;
		}

		fetchUpdateResult({ result, id: currentSession.id })
			.unwrap()
			.then(handleNavigate)
			.catch(handleNavigate);
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
