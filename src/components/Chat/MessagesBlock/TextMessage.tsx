import { FC } from 'react';

import { Thoughts } from '../Thoughts/Thoughts';

import userIcon from '@/assets/images/avatar-msg.png';
import miraIcon from '@/assets/images/icons/logo-chat.svg';

import { MessageLogo, MessageText, TextMessageWrap, ThoughtsWrap } from './index.styled';

interface TextMessageProps {
	isMira: boolean;
	text: string;
	searchBlock: {
		title: string;
		list: string[];
	}[];
}

export const TextMessage: FC<TextMessageProps> = ({ isMira, text, searchBlock }) => (
	<TextMessageWrap>
		<MessageLogo className={isMira ? 'mira' : 'user'}>
			<img src={isMira ? miraIcon : userIcon} alt="logo" />
		</MessageLogo>
		<MessageText className={isMira ? 'mira' : 'user'}>{text}</MessageText>
		{!!searchBlock.length && (
			<ThoughtsWrap>
				{searchBlock.map(({ list, title }, i) => (
					<Thoughts key={i} list={list} title={title} />
				))}
			</ThoughtsWrap>
		)}
	</TextMessageWrap>
);
