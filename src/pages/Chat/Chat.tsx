import { FC, useEffect } from 'react';

import { CardsBlock } from '@/components/Chat/CardsBlock/CardsBlock';
import { ComplaintBlock } from '@/components/Chat/ComplaintBlock/ComplaintBlock';
import { EndSessionBlock } from '@/components/Chat/EndSessionBlock/EndSessionBlock';
import { Feedback } from '@/components/Chat/Feedback/Feedback';
import { FirstBlock } from '@/components/Chat/FirstBlock/FirstBlock';
import { FurtherActionsBlock } from '@/components/Chat/FurtherActionsBlock/FurtherActionsBlock';
import { MessageBlock } from '@/components/Chat/MessagesBlock/MessagesBlock';
import { Input } from '@/components/ChatElements/Input/Input';
import { useAppDispatch, useAppSelector } from '@/store';
import { SessionBlocks, setHideInput, setSessionBlock } from '@/store/chat';

import { Wrapper } from './Chat.styled';

const ChatPage: FC = () => {
	const dispatch = useAppDispatch();
	const { hiddenInput, sessionBlock } = useAppSelector((state) => state.chat);

	useEffect(() => {
		switch (sessionBlock) {
			case SessionBlocks.FEEDBACK:
			case SessionBlocks.END_SESSION:
			case SessionBlocks.FUTURE_ACTIONS:
			case SessionBlocks.CARDS:
				dispatch(setHideInput(true));
				break;

			case SessionBlocks.FIRST:
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

	// TODO временно для перелистывания экранов
	const handleClick = (): void => {
		const newSession = sessionBlock === 6 ? 0 : sessionBlock + 1;
		dispatch(setSessionBlock(newSession));
	};

	return (
		<Wrapper className={!hiddenInput ? 'grid' : ''}>
			<button
				onClick={handleClick}
				style={{ background: 'none', position: 'absolute', top: '7rem', right: '2rem' }}
			>
				CL
			</button>
			{renderSessionBlock()}
			<Input />
		</Wrapper>
	);
};

export default ChatPage;
