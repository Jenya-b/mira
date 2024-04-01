import { FC } from 'react';

import userIcon from '@/assets/images/avatar-msg.png';
import miraIcon from '@/assets/images/logo-msg.png';

import { MessageLogo, MessageText, TextMessageWrap } from './index.styled';

interface TextMessageProps {
	isMira: boolean;
	text: string;
}

export const TextMessage: FC<TextMessageProps> = ({ isMira, text }) => (
	<TextMessageWrap>
		<MessageLogo>
			<img src={isMira ? miraIcon : userIcon} alt="logo" />
		</MessageLogo>
		<MessageText>{text}</MessageText>
	</TextMessageWrap>
);
