import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';
import { path } from '@/router/path';
import { useCreateSessionMutation, usePostMessageMutation } from '@/services/api/exerciserSessions';
import { useAppDispatch, useAppSelector } from '@/store';
import {
	ButtonsWS,
	StringObjectButtons,
	setHideInput,
	setTypingComplete,
} from '@/store/exerciserSession';

import { CheckWithUserList } from './TextMessage.styled';

interface TextMessageProps {
	logoParam: PersonMessage;
	text: string;
	buttons: ButtonsWS[] | StringObjectButtons[] | null;
	id: number;
	newMessage?: boolean;
	activeBtn?: string;
}

export const TextMessage: FC<TextMessageProps> = ({
	logoParam,
	text,
	buttons,
	id,
	newMessage = false,
	activeBtn,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { typingComplete, currentSession } = useAppSelector((state) => state.exerciserSession);
	const [isClick, setIsClick] = useState(false);
	const [selectedButtons, setSelectedButtons] = useState<string>('');
	const [fetchCreateSession] = useCreateSessionMutation();
	const [postMessage] = usePostMessageMutation();

	const handleTypingComplete = (isTyping: boolean): void => {
		dispatch(setTypingComplete(isTyping));
	};

	const handleSelectButtons = (
		content: string,
		action: string,
		action_param: number | undefined
	): void => {
		const lastId = currentSession!.messages[currentSession!.messages.length - 1]?.id;

		if (lastId !== id || isClick) {
			return;
		}

		setIsClick(true);

		if (action === 'NEXT_SESSION') {
			fetchCreateSession(null);
		} else if (action === 'FINISH_PRACTICE') {
			navigate(path.home);
		} else if (action === 'TRY_ONE_MORE_TIME_NEW_THOUGHT_CREATION') {
			dispatch(setHideInput(false));
		} else {
			setSelectedButtons(content);
			postMessage({ content, action, action_param });
		}
	};

	return (
		<WithMessage
			logoParam={logoParam}
			text={text}
			newMessage={newMessage}
			handleTypingComplete={handleTypingComplete}
			typingComplete={typingComplete}
		>
			<>
				{buttons !== null && (
					<CheckWithUserList>
						{(buttons as ButtonsWS[])!.map(({ content, action, action_param }, i) => (
							<li key={i}>
								<button
									className={content === selectedButtons || content === activeBtn ? 'active' : ''}
									onClick={() => handleSelectButtons(content, action, action_param)}
								>
									{content}
								</button>
							</li>
						))}
					</CheckWithUserList>
				)}
			</>
		</WithMessage>
	);
};
