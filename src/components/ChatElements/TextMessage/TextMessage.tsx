import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { DistortionCards } from '../Cards/DistortionCards';
import { ThoughtsCards } from '../Cards/ThoughtsCards';
import { Thoughts } from '../Thoughts/Thoughts';

import { instructionsThoughtsList } from '@/constants/chat';
// import { distortionCards } from '@/constants/distortionCards';
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
	Statuses,
	StringObject,
	StringObjectButtons,
	disconnectCurrentSession,
	setSessionBlock,
} from '@/store/chat';
import { SelectChatBlockEnum, selectChatBlock } from '@/utils/selectChatBlock';

import { CheckWithUserList, ThoughtsWrap } from './TextMessage.styled';

interface TextMessageProps {
	logoParam: PersonMessage;
	text: string;
	buttons: ButtonsWS[] | StringObjectButtons[] | null;
	stage: StageEnum;
	type?: MessageType;
	additional_data: AdditionalData | null;
	status: Statuses;
}

export const TextMessage: FC<TextMessageProps> = ({
	logoParam,
	text,
	buttons,
	stage,
	type,
	additional_data,
	status,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [selectedChatBlock, setSelectedChatBlock] = useState<SelectChatBlockEnum | null>(null);
	const [selectedButtons, setSelectedButtons] = useState<string>('');
	const { currentStage } = useAppSelector((state) => state.chat);
	const [postMessage] = usePostMessageMutation();
	const [fetchCreateSession] = useCreateSessionMutation();

	useEffect(() => {
		const chatBlock = selectChatBlock({
			additional_data,
			buttons: buttons as ButtonsWS[],
			stage,
			status,
		});
		setSelectedChatBlock(chatBlock);
	}, []);

	const sendCheckUser = (content: string, action: string, action_param?: number): void => {
		if ((type === MessageType.ERROR_MSG || type === MessageType.MSG) && action === 'NEW_SESSION') {
			fetchCreateSession(null);
		} else if (currentStage === StageEnum.QUESTIONNAIRE && action === 'SAVE_QUESTION') {
			navigate(path.questions);
		} else if (currentStage === StageEnum.NEW_THOUGHT_CREATION && action === 'FINISH_SESSION') {
			dispatch(setSessionBlock(SessionBlocks.FEEDBACK));
			dispatch(disconnectCurrentSession());
		} else if (
			currentStage === StageEnum.QUESTIONNAIRE ||
			currentStage === StageEnum.THERAPY_STARTING_POINT ||
			currentStage === StageEnum.NEW_THOUGHT_CREATION ||
			currentStage === StageEnum.DOUBT_CREATION ||
			currentStage === StageEnum.DISTORTIONS
		) {
			postMessage({ content, action, action_param });
		}
	};

	return (
		<WithMessage logoParam={logoParam} text={text}>
			{selectedChatBlock === SelectChatBlockEnum.CARDS ? (
				<ThoughtsCards
					data={[
						'Примеры новых мыслей',
						...(additional_data!.cards as string[]),
						...instructionsThoughtsList,
					]}
				/>
			) : selectedChatBlock === SelectChatBlockEnum.CHECK_WITH_USER ? (
				<>
					<CheckWithUserList>
						{(buttons as ButtonsWS[])!.map(({ content, action, action_param }, i) => (
							<li key={i}>
								<button
									className={content === selectedButtons ? 'active' : ''}
									onClick={() => {
										setSelectedButtons(content);
										sendCheckUser(content, action, action_param);
									}}
								>
									{content}
								</button>
							</li>
						))}
					</CheckWithUserList>
					{/* <DistortionCards data={distortionCards.ought} degree={0} type={0} /> */}
				</>
			) : selectedChatBlock === SelectChatBlockEnum.THOUGHTS ? (
				<ThoughtsWrap>
					{(buttons as StringObjectButtons[])!.map((item, i) => (
						<Thoughts
							key={i}
							list={item}
							descriptions={(additional_data?.descriptions as StringObject[])[i]}
							sendCheckUser={sendCheckUser}
						/>
					))}
				</ThoughtsWrap>
			) : undefined}
		</WithMessage>
	);
};
