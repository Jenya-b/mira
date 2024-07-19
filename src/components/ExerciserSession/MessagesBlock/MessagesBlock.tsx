import { FC, useEffect, useRef } from 'react';

import { LoaderMessage } from '../../ChatElements/LoaderMessage/LoaderMessage';
import { TextMessage } from '../TextMessage/TextMessage';

import { PersonMessage } from '@/hocs/WithMessage/WithMessage';
import { useAppDispatch, useAppSelector } from '@/store';
import { Author, MessageType, setCurrentStage, setInputBlock } from '@/store/exerciserSession';

import { Container, Wrapper } from './MessageBlock.styled';

export const MessageBlock: FC = () => {
	const dispatch = useAppDispatch();
	const { currentSession, typingComplete, inputBlock } = useAppSelector(
		(state) => state.exerciserSession
	);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (currentSession && currentSession.messages.length) {
			const lastMessage = currentSession.messages[currentSession.messages.length - 1];
			dispatch(setInputBlock(lastMessage.author === Author.USER));
			dispatch(setCurrentStage(lastMessage.stage));
		}

		const el = contentRef.current?.querySelector('#bottom-scroll');

		if (!el) {
			return;
		}

		setTimeout(() => el.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' }));
	}, [typingComplete, currentSession?.messages.length]);

	return (
		<Wrapper>
			<Container ref={contentRef}>
				{currentSession?.messages.map(
					({ author, buttons, content, type, id, newMessage, activeBtn }, i) => (
						<TextMessage
							key={i}
							logoParam={
								(author === Author.PSYCHOLOGIST || author === Author.SERVER) &&
								type === MessageType.UPD_MSG &&
								buttons !== null
									? PersonMessage.MIRA_CHECK
									: author === Author.PSYCHOLOGIST || author === Author.SERVER
										? PersonMessage.MIRA_MAIN
										: PersonMessage.USER
							}
							text={content}
							buttons={buttons}
							id={id}
							newMessage={newMessage}
							activeBtn={activeBtn}
						/>
					)
				)}
				{inputBlock && <LoaderMessage />}
				<div id="bottom-scroll" />
			</Container>
		</Wrapper>
	);
};
