import { FC, useEffect } from 'react';

import arrow from '@/assets/images/icons/arrow-top.svg';
import microphone from '@/assets/images/icons/microphone.svg';
import { ComplaintBlock } from '@/components/Chat/ComplaintBlock/ComplaintBlock';
import { EndSessionBlock } from '@/components/Chat/EndSessionBlock/EndSessionBlock';
import { Feedback } from '@/components/Chat/Feedback/Feedback';
import { FirstBlock } from '@/components/Chat/FirstBlock/FirstBlock';
import { FurtherActionsBlock } from '@/components/Chat/FurtherActionsBlock/FurtherActionsBlock';
import { useResize } from '@/hooks/useResize';
import { useAppDispatch, useAppSelector } from '@/store';
import { SessionBlocks, setHideInput, setInputValue, setSessionBlock } from '@/store/chat';

import { Input, Label, Wrapper, ChatWrap, Controls, Button } from './Chat.styled';

const ChatPage: FC = () => {
	const dispatch = useAppDispatch();
	const { inputValue, hiddenInput, sessionBlock } = useAppSelector((state) => state.chat);
	const [innerWidth] = useResize();

	useEffect(() => {
		switch (sessionBlock) {
			case SessionBlocks.FEEDBACK:
			case SessionBlocks.END_SESSION:
			case SessionBlocks.FUTURE_ACTIONS:
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
			case SessionBlocks.FIRST:
				return <FirstBlock />;
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
		const newSession = sessionBlock === 5 ? 0 : sessionBlock + 1;
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
			<ChatWrap>{renderSessionBlock()}</ChatWrap>
			<Label className={hiddenInput ? 'hidden' : ''}>
				<Input
					value={inputValue}
					onChange={(e) => dispatch(setInputValue(e.target.value))}
					placeholder="Сообщение..."
				/>
				<Controls>
					{innerWidth > 1000 ? (
						<>
							<Button>
								<img src={microphone} alt="btn" />
							</Button>
							<Button style={{ background: '#4eb97f' }}>
								<img src={arrow} alt="btn" />
							</Button>
						</>
					) : (
						<>
							<Button>
								<img src={!inputValue ? microphone : arrow} alt="btn" />
							</Button>
						</>
					)}
				</Controls>
			</Label>
		</Wrapper>
	);
};

export default ChatPage;
