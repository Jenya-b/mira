import { FC, useEffect, useRef } from 'react';

import { CardsBlock } from '@/components/Chat/CardsBlock/CardsBlock';
import { ComplaintBlock } from '@/components/Chat/ComplaintBlock/ComplaintBlock';
import { EndSessionBlock } from '@/components/Chat/EndSessionBlock/EndSessionBlock';
import { Feedback } from '@/components/Chat/Feedback/Feedback';
import { FirstBlock } from '@/components/Chat/FirstBlock/FirstBlock';
import { FurtherActionsBlock } from '@/components/Chat/FurtherActionsBlock/FurtherActionsBlock';
import { MessageBlock } from '@/components/Chat/MessagesBlock/MessagesBlock';
import { Input } from '@/components/ChatElements/Input/Input';
import { Loader } from '@/components/Loader/Loader';
import { useGetLastSessionQuery } from '@/services/api/session';
import { useAppDispatch, useAppSelector } from '@/store';
import {
	Author,
	Message,
	SessionBlocks,
	StageEnum,
	addMessage,
	setHideInput,
	setInputValue,
	setSessionBlock,
} from '@/store/chat';

import { Wrapper } from './Chat.styled';

const ChatPage: FC = () => {
	const dispatch = useAppDispatch();
	const { hiddenInput, sessionBlock, currentStage, inputValue } = useAppSelector(
		(state) => state.chat
	);
	const { accessToken } = useAppSelector((state) => state.user);
	const ws = useRef<WebSocket | null>(null);

	const { isLoading, isSuccess, data } = useGetLastSessionQuery(null);

	useEffect(() => {
		if (isSuccess && data !== undefined && Object.keys(data).length !== 0) {
			if (data.messages.length) {
				dispatch(setSessionBlock(SessionBlocks.CHAT));
			} else {
				dispatch(setSessionBlock(SessionBlocks.FIRST));
			}
		}
	}, [isSuccess]);

	useEffect(() => {
		ws.current = new WebSocket(
			`${import.meta.env.VITE_API_WEB_SOCKET_URL}/chat/?token=${accessToken}`
		);

		ws.current.onopen = () => console.log('ws opened');

		ws.current.onclose = () => console.log('ws closed');

		ws.current.onmessage = function (event) {
			try {
				const json = JSON.parse(event.data);

				if (json.errors) {
					return;
				}

				dispatch(addMessage(json as Message));
			} catch {
				throw new Error();
			}
		};

		const wsCurrent = ws.current;

		return () => {
			wsCurrent.close();
		};
	}, []);

	useEffect(() => {
		switch (sessionBlock) {
			case SessionBlocks.HOME:
			case SessionBlocks.FEEDBACK:
			case SessionBlocks.END_SESSION:
			case SessionBlocks.FUTURE_ACTIONS:
			case SessionBlocks.CARDS:
				dispatch(setHideInput(true));
				break;

			case SessionBlocks.FIRST:
			case SessionBlocks.CHAT:
				dispatch(setHideInput(false));
				break;

			default:
				break;
		}
	}, [hiddenInput, sessionBlock]);

	const renderSessionBlock = (): JSX.Element => {
		switch (sessionBlock) {
			case SessionBlocks.HOME:
				return <FurtherActionsBlock isHome />;
			case SessionBlocks.FIRST:
				return <FirstBlock />;
			case SessionBlocks.CHAT:
				return <MessageBlock />;
			case SessionBlocks.CARDS:
				return <CardsBlock />;
			case SessionBlocks.FEEDBACK:
				return <Feedback />;
			case SessionBlocks.COMPLAINT:
				return <ComplaintBlock />;
			case SessionBlocks.FUTURE_ACTIONS:
				return <FurtherActionsBlock />;
			case SessionBlocks.END_SESSION:
				return <EndSessionBlock />;
			default:
				return <></>;
		}
	};

	const sendMessage = (): void => {
		const wsCurrent = ws.current;

		if (wsCurrent?.readyState === WebSocket.OPEN && inputValue) {
			if (currentStage === StageEnum.SITUATION) {
				wsCurrent.send(JSON.stringify({ content: inputValue, action: 'MESSAGE' }));
				const message: Message = {
					author: Author.USER,
					buttons: null,
					content: inputValue,
					created_at: '',
					gpt: true,
					role: 'user',
					stage: StageEnum.SITUATION,
					status: 1,
					type: 'msg',
				};
				dispatch(addMessage(message));
			}
			dispatch(setSessionBlock(SessionBlocks.CHAT));
			dispatch(setInputValue(''));
		}
	};

	// TODO временно для перелистывания экранов
	const handleClick = (): void => {
		const newSession = sessionBlock === 7 ? 0 : sessionBlock + 1;
		dispatch(setSessionBlock(newSession));
	};

	return (
		<Wrapper className={!hiddenInput ? 'grid' : ''}>
			{isLoading && <Loader />}
			<button
				onClick={handleClick}
				style={{ background: 'none', position: 'absolute', top: '7rem', right: '2rem' }}
			>
				CL
			</button>
			{renderSessionBlock()}
			<Input sendMessage={sendMessage} />
		</Wrapper>
	);
};

export default ChatPage;
