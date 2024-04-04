import { FC } from 'react';

import { CheckWithUser } from '../../ChatElements/CheckWithUser/CheckWithUser';
import { LoaderMessage } from '../../ChatElements/LoaderMessage/LoaderMessage';

import { TextMessage } from '@/components/ChatElements/TextMessage/TextMessage';
import { messagesList } from '@/constants/chat';
import { PersonMessage } from '@/hocs/WithMessage/WithMessage';

import { Container, Wrapper } from './MessageBlock.styled';

export const MessageBlock: FC = () => (
	<Wrapper>
		<Container>
			{messagesList.map(({ text, searchBlock, logoParam }, i) => (
				<TextMessage
					key={i}
					logoParam={logoParam as PersonMessage}
					text={text}
					searchBlock={searchBlock}
				/>
			))}
			<CheckWithUser />
			<LoaderMessage />
		</Container>
	</Wrapper>
);
