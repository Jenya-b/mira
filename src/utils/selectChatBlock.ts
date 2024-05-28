import { AdditionalData, ButtonsWS, StageEnum, Statuses } from '@/store/chat';

interface SelectChatBlockType {
	stage: StageEnum;
	buttons: ButtonsWS[] | null;
	additional_data: AdditionalData | null;
	status: Statuses;
}

export enum SelectChatBlockEnum {
	CARDS,
	CHECK_WITH_USER,
	THOUGHTS,
	UNDEFINED,
}

export const selectChatBlock = ({
	stage,
	buttons,
	additional_data,
	status,
}: SelectChatBlockType): SelectChatBlockEnum => {
	if (
		stage === StageEnum.NEW_THOUGHT_CREATION &&
		additional_data !== null &&
		additional_data?.cards
	) {
		return SelectChatBlockEnum.CARDS;
	}

	if (
		(stage === StageEnum.QUESTIONNAIRE ||
			stage === StageEnum.THERAPY_STARTING_POINT ||
			stage === StageEnum.NEW_THOUGHT_CREATION ||
			(stage === StageEnum.DISTORTIONS && status === Statuses.END_SESSION) ||
			stage === StageEnum.DOUBT_CREATION) &&
		buttons !== null
	) {
		return SelectChatBlockEnum.CHECK_WITH_USER;
	}

	if (stage === StageEnum.DISTORTIONS && buttons !== null) {
		return SelectChatBlockEnum.THOUGHTS;
	}

	return SelectChatBlockEnum.UNDEFINED;
};
