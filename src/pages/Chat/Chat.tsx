import { FC } from 'react';

import { FirstBlock } from '@/components/Chat/FirstBlock/FirstBlock';
import { useAppDispatch, useAppSelector } from '@/store';
import { setInputValue } from '@/store/chat';

import { ButtonPrimary, ButtonSecondary, Input, Label, Wrapper, ChatWrap } from './Chat.styled';

const ChatPage: FC = () => {
	const dispatch = useAppDispatch();
	const { inputValue } = useAppSelector((state) => state.chat);

	return (
		<Wrapper>
			<ChatWrap>
				<FirstBlock />
			</ChatWrap>
			<Label>
				<Input
					value={inputValue}
					onChange={(e) => dispatch(setInputValue(e.target.value))}
					placeholder="Сообщение..."
				/>
				<ButtonPrimary />
				<ButtonSecondary />
			</Label>
		</Wrapper>
	);
};

export default ChatPage;
