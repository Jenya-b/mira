import { FC } from 'react';

import userIcon from '@/assets/images/avatar-msg.png';
import miraIcon from '@/assets/images/icons/logo-chat.svg';
import miraCheckIcon from '@/assets/images/icons/logo-chat2.svg';

import { Logo, Text, Wrapper } from './WithMessage.styled';

export enum PersonMessage {
	MIRA_MAIN = 'mira',
	MIRA_CHECK = 'mira-check',
	USER = 'user',
}

interface WithMessageProps {
	logoParam: PersonMessage;
	text: string;
	children?: JSX.Element;
}

export const WithMessage: FC<WithMessageProps> = ({ logoParam, text, children }) => (
	<Wrapper>
		<Logo className={logoParam}>
			<img
				src={
					logoParam === PersonMessage.MIRA_MAIN
						? miraIcon
						: logoParam === PersonMessage.MIRA_CHECK
							? miraCheckIcon
							: userIcon
				}
				alt="logo"
			/>
		</Logo>
		<Text className={logoParam}>{text}</Text>
		{children}
	</Wrapper>
);
