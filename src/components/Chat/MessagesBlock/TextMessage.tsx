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
		<MessageLogo className={isMira ? 'mira' : 'user'}>
			<img src={isMira ? miraIcon : userIcon} alt="logo" />
		</MessageLogo>
		<MessageText className={isMira ? 'mira' : 'user'}>{text}</MessageText>
	</TextMessageWrap>
);
