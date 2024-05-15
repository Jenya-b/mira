import { FC, useContext, useEffect } from 'react';

import modalIcon from '@/assets/images/bulb.png';
import { CardsBlock } from '@/components/Chat/CardsBlock/CardsBlock';
import { ComplaintBlock } from '@/components/Chat/ComplaintBlock/ComplaintBlock';
import { EndSessionBlock } from '@/components/Chat/EndSessionBlock/EndSessionBlock';
import { Feedback } from '@/components/Chat/Feedback/Feedback';
import { FirstBlock } from '@/components/Chat/FirstBlock/FirstBlock';
import { FurtherActionsBlock } from '@/components/Chat/FurtherActionsBlock/FurtherActionsBlock';
import { MessageBlock } from '@/components/Chat/MessagesBlock/MessagesBlock';
import { Input } from '@/components/ChatElements/Input/Input';
import { BaseModal } from '@/components/Modal/Modal';
import { ChatContext } from '@/context/chat';
import { useModal } from '@/hooks/useModal';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { usePostMessageMutation } from '@/services/api/session';
import { useAppDispatch, useAppSelector } from '@/store';
import {
	Author,
	Message,
	MessageType,
	SessionBlocks,
	StageEnum,
	addMessage,
	setHideInput,
	setInputValue,
	setSessionBlock,
} from '@/store/chat';

import { Wrapper } from './Chat.styled';

interface WSMessage {
	message: Message;
	errors: [];
	user_id: number;
	is_all_users: boolean;
}

const ChatPage: FC = () => {
	const dispatch = useAppDispatch();
	const { hiddenInput, sessionBlock, currentStage, inputValue } = useAppSelector(
		(state) => state.chat
	);
	const { accessToken } = useAppSelector((state) => state.user);
	const { isActivePWA } = useAppSelector((state) => state.general);
	const { ws } = useContext(ChatContext);
	const [isOpenModal, openModal, closeModal] = useModal();
	const { onClickSusbribeToPushNotification, userSubscription } = usePushNotifications();

	const [postMessage, { isSuccess: isSuccessPost }] = usePostMessageMutation();

	useEffect(() => {
		if (!isActivePWA || userSubscription !== null) {
			closeModal();

			return;
		}

		const localStorageDate = localStorage.getItem('therapyReminderData');

		if (localStorageDate === null) {
			openModal();
		} else if (localStorageDate !== null) {
			const localDate = Number(localStorageDate);
			const currentDate = new Date().getTime();
			const week = 1000 * 60 * 60 * 24 * 7;

			if (currentDate >= localDate + week) {
				openModal();
			}
		}
	}, [userSubscription]);

	useEffect(() => {
		if (!isSuccessPost) {
			return;
		}

		const message: Message = {
			author: Author.USER,
			buttons: null,
			content: inputValue,
			created_at: '',
			gpt: true,
			role: 'user',
			stage: StageEnum.SITUATION,
			status: 1,
			type: MessageType.MSG,
		};
		dispatch(addMessage(message));
		dispatch(setSessionBlock(SessionBlocks.CHAT));
		dispatch(setInputValue(''));
	}, [isSuccessPost]);

	useEffect(() => {
		if (ws === null) {
			return;
		}

		ws.current = new WebSocket(
			`${import.meta.env.VITE_API_WEB_SOCKET_URL}/chat/?token=${accessToken}`
		);

		ws.current.onopen = () => console.log('ws opened');

		ws.current.onclose = () => console.log('ws closed');

		ws.current.onmessage = function (event) {
			try {
				const json: WSMessage = JSON.parse(event.data);

				if (json.errors.length) {
					return;
				}

				dispatch(addMessage(json.message as Message));
			} catch {
				throw new Error();
			}
		};

		const wsCurrent = ws.current;

		// eslint-disable-next-line consistent-return
		return () => {
			wsCurrent.close();
		};
	}, []);

	useEffect(() => {
		switch (sessionBlock) {
			case SessionBlocks.HOME:
			case SessionBlocks.FEEDBACK:
			case SessionBlocks.END_SESSION:
			case SessionBlocks.FUTURE_ACTIONS:
			case SessionBlocks.CARDS:
				dispatch(setHideInput(true));
				break;

			case SessionBlocks.FIRST:
			case SessionBlocks.CHAT:
				dispatch(setHideInput(false));
				break;

			default:
				break;
		}
	}, [hiddenInput, sessionBlock]);

	const renderSessionBlock = (): JSX.Element => {
		switch (sessionBlock) {
			case SessionBlocks.HOME:
				return <FurtherActionsBlock isHome />;
			case SessionBlocks.FIRST:
				return <FirstBlock />;
			case SessionBlocks.CHAT:
				return <MessageBlock />;
			case SessionBlocks.CARDS:
				return <CardsBlock />;
			case SessionBlocks.FEEDBACK:
				return <Feedback />;
			case SessionBlocks.COMPLAINT:
				return <ComplaintBlock />;
			case SessionBlocks.FUTURE_ACTIONS:
				return <FurtherActionsBlock />;
			case SessionBlocks.END_SESSION:
				return <EndSessionBlock />;
			default:
				return <></>;
		}
	};

	const sendMessage = (): void => {
		if (currentStage === StageEnum.SITUATION) {
			postMessage({ action: 'MESSAGE', content: inputValue });
		}
	};

	const handleClickModal = (): void => {
		onClickSusbribeToPushNotification();
	};

	const handleCloseModal = (): void => {
		const currentDate = new Date().getTime();
		localStorage.setItem('therapyReminderData', String(currentDate));
		closeModal();
	};

	// TODO временно для перелистывания экранов
	const handleClick = (): void => {
		const newSession = sessionBlock === 7 ? 0 : sessionBlock + 1;
		dispatch(setSessionBlock(newSession));
	};

	return (
		<Wrapper className={!hiddenInput ? 'grid' : ''}>
			<button
				onClick={handleClick}
				style={{ background: 'none', position: 'absolute', top: '7rem', right: '2rem' }}
			>
				CL
			</button>
			{renderSessionBlock()}
			<Input sendMessage={sendMessage} />
			<BaseModal
				buttonText="Включить"
				buttonTextSecond="Пропустить"
				title="Как получать от Миры напоминания о терапии?"
				subtitle="Включите пуш-уведомления, чтобы обеспечить эффективность и последовательность терапии"
				imgSrc={modalIcon}
				isOpen={isOpenModal}
				handleClickModal={handleClickModal}
				closeModal={handleCloseModal}
				handleClickModalSecond={handleCloseModal}
			/>
		</Wrapper>
	);
};

export default ChatPage;
