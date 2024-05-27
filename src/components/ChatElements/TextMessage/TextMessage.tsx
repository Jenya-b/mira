import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Cards } from '../Cards/Cards';
import { Thoughts } from '../Thoughts/Thoughts';

import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';
import { path } from '@/router/path';
import { useCreateSessionMutation, usePostMessageMutation } from '@/services/api/session';
import { useAppDispatch, useAppSelector } from '@/store';
import {
	AdditionalData,
	ButtonsWS,
	MessageType,
	SessionBlocks,
	StageEnum,
	setSessionBlock,
} from '@/store/chat';

import { CheckWithUserList, ThoughtsWrap } from './TextMessage.styled';

interface TextMessageProps {
	logoParam: PersonMessage;
	text: string;
	buttons: ButtonsWS[] | null;
	stage: StageEnum;
	type?: MessageType;
	additional_data: AdditionalData | null;
}

export const TextMessage: FC<TextMessageProps> = ({
	logoParam,
	text,
	buttons,
	stage,
	type,
	additional_data,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { currentStage } = useAppSelector((state) => state.chat);
	const [postMessage] = usePostMessageMutation();
	const [fetchCreateSession] = useCreateSessionMutation();

	const sendCheckUser = (content: string, action: string, action_param?: number): void => {
		if (type === MessageType.ERROR_MSG && action === 'NEW_SESSION') {
			fetchCreateSession(null);
		} else if (currentStage === StageEnum.QUESTIONNAIRE && action === 'SAVE_QUESTION') {
			navigate(path.questions);
		} else if (currentStage === StageEnum.NEW_THOUGHT_CREATION && action === 'FINISH_SESSION') {
			dispatch(setSessionBlock(SessionBlocks.FEEDBACK));
		} else if (
			currentStage === StageEnum.QUESTIONNAIRE ||
			currentStage === StageEnum.THERAPY_STARTING_POINT ||
			currentStage === StageEnum.NEW_THOUGHT_CREATION ||
			currentStage === StageEnum.DOUBT_CREATION
		) {
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
			) : stage === StageEnum.NEW_THOUGHT_CREATION &&
			  additional_data !== null &&
			  additional_data?.cards ? (
				<Cards data={additional_data.cards} />
			) : (stage === StageEnum.QUESTIONNAIRE ||
					stage === StageEnum.THERAPY_STARTING_POINT ||
					stage === StageEnum.NEW_THOUGHT_CREATION ||
					stage === StageEnum.DOUBT_CREATION) &&
			  buttons !== null ? (
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
