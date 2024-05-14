import { FC } from 'react';

import { Thoughts } from '../Thoughts/Thoughts';

import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';
import { usePostMessageMutation } from '@/services/api/session';
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
	const { currentStage } = useAppSelector((state) => state.chat);
	const [postMessage] = usePostMessageMutation();

	const sendCheckUser = (content: string, action: string, action_param?: number): void => {
		if (currentStage === StageEnum.QUESTIONNAIRE) {
			postMessage({ content, action, action_param });
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
