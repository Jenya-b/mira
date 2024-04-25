import { FC, useEffect, useRef, useState } from 'react';

import { LoaderMessage } from '../../ChatElements/LoaderMessage/LoaderMessage';

import { TextMessage } from '@/components/ChatElements/TextMessage/TextMessage';
import { PersonMessage } from '@/hocs/WithMessage/WithMessage';
import { useAppDispatch, useAppSelector } from '@/store';
import { setCurrentStage } from '@/store/chat';

import { Container, Wrapper } from './MessageBlock.styled';

export const MessageBlock: FC = () => {
	const dispatch = useAppDispatch();
	const { currentSession } = useAppSelector((state) => state.chat);
	const [isLoader, setIsLoader] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (currentSession && currentSession.messages.length) {
			const lastMessage = currentSession.messages[currentSession.messages.length - 1];
			setIsLoader(!lastMessage.author);
			dispatch(setCurrentStage(lastMessage.stage));
		}

		const el = contentRef.current?.querySelector('#bottom-scroll');

		if (!el) {
			return;
		}

		setTimeout(() => el.scrollIntoView({ block: 'center', behavior: 'smooth' }));
	}, [currentSession, isLoader]);

	return (
		<Wrapper>
			<Container ref={contentRef}>
				{currentSession?.messages.map(({ author, buttons, content }, i) => (
					<TextMessage
						key={i}
						logoParam={author ? PersonMessage.MIRA_MAIN : PersonMessage.USER}
						text={content}
						buttons={buttons}
					/>
				))}
				{isLoader && <LoaderMessage />}
				<div id="bottom-scroll" />
			</Container>
		</Wrapper>
	);
};
