import { FC, useEffect, useRef, useState } from 'react';

import { LoaderMessage } from '../../ChatElements/LoaderMessage/LoaderMessage';

import { TextMessage } from '@/components/ChatElements/TextMessage/TextMessage';
import { PersonMessage } from '@/hocs/WithMessage/WithMessage';
import { useAppDispatch, useAppSelector } from '@/store';
import { MessageType, setCurrentStage } from '@/store/chat';

import { Container, Wrapper } from './MessageBlock.styled';

export const MessageBlock: FC = () => {
	const dispatch = useAppDispatch();
	const { currentSession, typingComplete } = useAppSelector((state) => state.chat);
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

		setTimeout(() => el.scrollIntoView({ block: 'start', inline: 'nearest' }));
	}, [typingComplete, currentSession?.messages.length]);

	return (
		<Wrapper>
			<Container ref={contentRef}>
				{currentSession?.messages.map(
					(
						{ author, buttons, content, stage, type, additional_data, status, id, newMessage },
						i
					) => (
						<TextMessage
							key={i}
							logoParam={
								author && type === MessageType.UPD_MSG && buttons !== null
									? PersonMessage.MIRA_CHECK
									: author
										? PersonMessage.MIRA_MAIN
										: PersonMessage.USER
							}
							text={content}
							buttons={buttons}
							stage={stage}
							type={type}
							additional_data={additional_data}
							status={status}
							id={id}
							newMessage={newMessage}
						/>
					)
				)}
				{isLoader && <LoaderMessage />}
				<div id="bottom-scroll" />
			</Container>
		</Wrapper>
	);
};
