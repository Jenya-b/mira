import { FC, useContext } from 'react';

import { Thoughts } from '../Thoughts/Thoughts';

import { ChatContext } from '@/context/chat';
import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';
import { useAppSelector } from '@/store';
import { ButtonsWS, StageEnum } from '@/store/chat';

import { CheckWithUserList, ThoughtsWrap } from './TextMessage.styled';

interface TextMessageProps {
	logoParam: PersonMessage;
	text: string;
	buttons: ButtonsWS[] | null;
	stage: StageEnum;
}

export const TextMessage: FC<TextMessageProps> = ({ logoParam, text, buttons, stage }) => {
	const { ws } = useContext(ChatContext);
	const { currentStage } = useAppSelector((state) => state.chat);

	const sendCheckUser = (content: string, action: string, action_param?: number): void => {
		if (ws === null) {
			return;
		}

		const wsCurrent = ws.current;

		if (wsCurrent?.readyState === WebSocket.OPEN) {
			if (currentStage === StageEnum.QUESTIONNAIRE) {
				wsCurrent.send(JSON.stringify({ content, action, action_param }));
			}
		}
	};

	return (
		<WithMessage logoParam={logoParam} text={text}>
			{stage === StageEnum.DISTORTIONS && buttons !== null ? (
				<ThoughtsWrap>
					{buttons.map(({ content }, i) => (
						<Thoughts key={i} list={[]} title={content} />
					))}
				</ThoughtsWrap>
			) : stage === StageEnum.QUESTIONNAIRE && buttons !== null ? (
				<CheckWithUserList>
					{buttons.map(({ content, action, action_param }, i) => (
						<li key={i}>
							<button onClick={() => sendCheckUser(content, action, action_param)}>
								{content}
							</button>
						</li>
					))}
				</CheckWithUserList>
			) : undefined}
		</WithMessage>
	);
};
