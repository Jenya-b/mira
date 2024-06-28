import { FC, useContext, useEffect, useRef, useState } from 'react';

import modalIcon from '@/assets/images/bulb.png';
import { CardsBlock } from '@/components/Chat/CardsBlock/CardsBlock';
import { ComplaintBlock } from '@/components/Chat/ComplaintBlock/ComplaintBlock';
import { EndSessionBlock } from '@/components/Chat/EndSessionBlock/EndSessionBlock';
import { Feedback } from '@/components/Chat/Feedback/Feedback';
import { FirstBlock } from '@/components/Chat/FirstBlock/FirstBlock';
import { FurtherActionsBlock } from '@/components/Chat/FurtherActionsBlock/FurtherActionsBlock';
import { MessageBlock } from '@/components/Chat/MessagesBlock/MessagesBlock';
import { Input } from '@/components/ChatElements/Input/Input';
import { Loader } from '@/components/Loader/Loader';
import { BaseModal } from '@/components/Modal/Modal';
import { ChatContext } from '@/context/chat';
import { useAppSnackbar } from '@/hooks/useAppSnackbar';
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
	setReconnectWS,
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
	const { hiddenInput, sessionBlock, inputValue, buttonsBlock, reconnectWS } = useAppSelector(
		(state) => state.chat
	);
	const { accessToken } = useAppSelector((state) => state.user);
	const { isActivePWA } = useAppSelector((state) => state.general);
	const { ws, reconnectInterval } = useContext(ChatContext);
	const [isOpenModal, openModal, closeModal] = useModal();
	const { onClickSusbribeToPushNotification, userSubscription, loading } = usePushNotifications();
	const numberConnectRef = useRef(0);
	const [isConnectError, setIsConnectError] = useState(false);
	const { openSnackbar } = useAppSnackbar();
	const [postMessage, { isSuccess: isSuccessPost }] = usePostMessageMutation();

	useEffect(() => {
		if (isConnectError) {
			console.log('err');

			openSnackbar('warning', 'Страница не отвечает');
		}
	}, [isConnectError]);

	useEffect(() => {
		if (loading || !isActivePWA || userSubscription !== null) {
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
			additional_data: null,
		};
		dispatch(addMessage(message));
		dispatch(setSessionBlock(SessionBlocks.CHAT));
		dispatch(setInputValue(''));
	}, [isSuccessPost]);

	const connectWebSocket = (): void => {
		if (ws === null || reconnectInterval === null) {
			return;
		}

		if (numberConnectRef.current === 6) {
			openSnackbar('warning', 'Страница не отвечает. Вы можете подождать или обновить её.');
		}

		ws.current = new WebSocket(
			`${import.meta.env.VITE_API_WEB_SOCKET_URL}/chat/?token=${accessToken}`
		);

		ws.current.onopen = () => {
			console.log('ws opened');
			dispatch(setReconnectWS(false));
			setIsConnectError(false);

			if (reconnectInterval.current) {
				clearInterval(reconnectInterval.current);
				reconnectInterval.current = null;
				numberConnectRef.current = 0;
			}
		};

		ws.current.onclose = () => {
			console.log('ws closed');

			if (reconnectInterval.current === null) {
				reconnectInterval.current = setInterval(() => {
					console.log('Attempting to reconnect...');
					numberConnectRef.current += 1;
					dispatch(setReconnectWS(true));
					connectWebSocket();
				}, 2000); // Период попыток переподключения в миллисекундах
			}
		};

		ws.current.onmessage = (event) => {
			try {
				const json: WSMessage = JSON.parse(event.data);

				if (json.errors.length) {
					return;
				}

				dispatch(addMessage({ ...json.message, newMessage: true } as Message));
			} catch {
				throw new Error();
			}
		};
	};

	useEffect(() => {
		if (ws === null || reconnectInterval === null) {
			return;
		}

		connectWebSocket();

		// eslint-disable-next-line consistent-return
		return () => {
			if (ws.current) {
				ws.current.close();
			}

			if (reconnectInterval.current !== null) {
				clearInterval(reconnectInterval.current);
			}
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
				dispatch(setHideInput(false));
				break;
			case SessionBlocks.CHAT:
				dispatch(setHideInput(buttonsBlock));

				break;

			default:
				break;
		}
	}, [hiddenInput, sessionBlock, buttonsBlock]);

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
		postMessage({ action: 'MESSAGE', content: inputValue });
	};

	const handleClickModal = (): void => {
		onClickSusbribeToPushNotification();
	};

	const handleCloseModal = (): void => {
		const currentDate = new Date().getTime();
		localStorage.setItem('therapyReminderData', String(currentDate));
		closeModal();
	};

	return (
		<Wrapper
			className={!hiddenInput || (hiddenInput && sessionBlock === SessionBlocks.CHAT) ? 'grid' : ''}
		>
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
			{reconnectWS && <Loader />}
		</Wrapper>
	);
};

export default ChatPage;
