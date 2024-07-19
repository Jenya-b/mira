import { ChangeEvent, FC, useContext, useEffect } from 'react';

import { Input } from '@/components/ChatElements/Input/Input';
import { CardsBlock } from '@/components/ExerciserSession/CardsBlock/CardsBlock';
import { MessageBlock } from '@/components/ExerciserSession/MessagesBlock/MessagesBlock';
import { ExerciserContext } from '@/context/exerciser';
import { useCreateSessionMutation, usePostMessageMutation } from '@/services/api/exerciserSessions';
import { useAppDispatch, useAppSelector } from '@/store';
import {
	addMessage,
	Author,
	Message,
	SessionBlocks,
	setHideInput,
	setInputValue,
} from '@/store/exerciserSession';

import { Wrapper } from './ExerciserSession.styled';

const ExerciserSession: FC = () => {
	const dispatch = useAppDispatch();
	const { hiddenInput, sessionBlock, inputValue, inputBlock, currentSession, isGetSessionData } =
		useAppSelector((state) => state.exerciserSession);
	const { accessToken } = useAppSelector((state) => state.user);
	const { ws } = useContext(ExerciserContext);
	const [fetchCreateSession] = useCreateSessionMutation();
	const [postMessage] = usePostMessageMutation();

	useEffect(() => {
		if (isGetSessionData && (currentSession === null || !currentSession.active)) {
			fetchCreateSession(null);
		}
	}, [isGetSessionData]);

	const renderSessionBlock = (): JSX.Element => {
		switch (sessionBlock) {
			case SessionBlocks.CARDS:
				dispatch(setHideInput(true));

				return <CardsBlock />;

			case SessionBlocks.CHAT:
				return <MessageBlock />;

			default:
				return <></>;
		}
	};

	const sendMessage = (): void => {
		postMessage({ action: 'MESSAGE', content: inputValue })
			.unwrap()
			.then(() => dispatch(setInputValue('')));
	};

	const connectWebSocket = (): void => {
		if (ws === null) {
			return;
		}

		ws.current = new WebSocket(
			`${import.meta.env.VITE_API_WEB_SOCKET_URL}/exerciser/?token=${accessToken}`
		);

		ws.current.onopen = () => console.log('ws opened');

		ws.current.onclose = () => console.log('ws closed');

		ws.current.onmessage = (event) => {
			try {
				const json = JSON.parse(event.data);

				if (json.errors.length) {
					return;
				}

				dispatch(
					addMessage({
						...json.message,
						newMessage: !(json.message.author === Author.USER),
					} as Message)
				);
			} catch {
				throw new Error();
			}
		};
	};

	useEffect(() => {
		if (ws === null) {
			return;
		}

		connectWebSocket();

		// eslint-disable-next-line consistent-return
		return () => {
			if (ws.current) {
				ws.current.close();
			}
		};
	}, []);

	const handleInputValue = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		dispatch(setInputValue(e.target.value));
	};

	return (
		<Wrapper
			className={!hiddenInput || (hiddenInput && sessionBlock === SessionBlocks.CHAT) ? 'grid' : ''}
		>
			{renderSessionBlock()}
			<Input
				sendMessage={sendMessage}
				hiddenInput={hiddenInput}
				inputBlock={inputBlock}
				inputValue={inputValue}
				handleInputValue={handleInputValue}
			/>
		</Wrapper>
	);
};

export default ExerciserSession;
