import { FC } from 'react';

import { messagesList } from '@/constants/chat';

import { Container, Wrapper } from './index.styled';
import { LoaderMessage } from './LoaderMessage';
import { TextMessage } from './TextMessage';

export const MessageBlock: FC = () => (
	<Wrapper>
		<Container>
			{messagesList.map(({ isMira, text }, i) => (
				<TextMessage key={i} isMira={isMira} text={text} />
			))}
			<LoaderMessage />
		</Container>
	</Wrapper>
);
