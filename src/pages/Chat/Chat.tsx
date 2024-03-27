import { FC } from 'react';

import arrow from '@/assets/images/icons/arrow-top.svg';
import microphone from '@/assets/images/icons/microphone.svg';
import { Feedback } from '@/components/Chat/Feedback/Feedback';
import { FirstBlock } from '@/components/Chat/FirstBlock/FirstBlock';
import { useResize } from '@/hooks/useResize';
import { useAppDispatch, useAppSelector } from '@/store';
import { SessionBlocks, setInputValue } from '@/store/chat';

import { Input, Label, Wrapper, ChatWrap, Controls, Button } from './Chat.styled';

const ChatPage: FC = () => {
	const dispatch = useAppDispatch();
	const { inputValue, sessionBlock } = useAppSelector((state) => state.chat);
	const [innerWidth] = useResize();

	const renderSessionBlock = (): JSX.Element => {
		switch (sessionBlock) {
			case SessionBlocks.FIRST:
				return <FirstBlock />;
			case SessionBlocks.FEEDBACK:
				return <Feedback />;

			default:
				return <></>;
		}
	};

	return (
		<Wrapper>
			<ChatWrap>{renderSessionBlock()}</ChatWrap>
			<Label>
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
