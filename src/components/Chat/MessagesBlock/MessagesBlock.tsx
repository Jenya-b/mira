import { FC } from 'react';

import { CheckWithUser } from '../CheckWithUser/CheckWithUser';
import { LoaderMessage } from '../LoaderMessage/LoaderMessage';

import { messagesList } from '@/constants/chat';

import { Container, Wrapper } from './index.styled';
import { TextMessage } from './TextMessage';

export const MessageBlock: FC = () => (
	<Wrapper>
		<Container>
			{messagesList.map(({ isMira, text, searchBlock }, i) => (
				<TextMessage key={i} isMira={isMira} text={text} searchBlock={searchBlock} />
			))}
			<CheckWithUser />
			<LoaderMessage />
		</Container>
	</Wrapper>
);
