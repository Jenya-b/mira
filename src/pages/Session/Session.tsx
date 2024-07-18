import { FC, useContext, useEffect } from 'react';

import modalIcon from '@/assets/images/bulb.png';
import { Input } from '@/components/ChatElements/Input/Input';
import { Loader } from '@/components/Loader/Loader';
import { BaseModal } from '@/components/Modal/Modal';
import { CardsBlock } from '@/components/Session/CardsBlock/CardsBlock';
import { ComplaintBlock } from '@/components/Session/ComplaintBlock/ComplaintBlock';
import { EndSessionBlock } from '@/components/Session/EndSessionBlock/EndSessionBlock';
import { Feedback } from '@/components/Session/Feedback/Feedback';
import { FirstBlock } from '@/components/Session/FirstBlock/FirstBlock';
import { FurtherActionsBlock } from '@/components/Session/FurtherActionsBlock/FurtherActionsBlock';
import { MessageBlock } from '@/components/Session/MessagesBlock/MessagesBlock';
import { ChatContext } from '@/context/chat';
import { useModal } from '@/hooks/useModal';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { usePostMessageMutation } from '@/services/api/session';
import { useAppDispatch, useAppSelector } from '@/store';
import {
	Author,
	Message,
	SessionBlocks,
	addMessage,
	setHideInput,
	setInputValue,
	setSessionBlock,
} from '@/store/chat';

import { Wrapper } from './Session.styled';

interface WSMessage {
	message: Message;
	errors: [];
	user_id: number;
	is_all_users: boolean;
}

const SessionPage: FC = () => {
	const dispatch = useAppDispatch();
	const { hiddenInput, sessionBlock, inputValue, buttonsBlock, reconnectWS } = useAppSelector(
		(state) => state.chat
	);
	const { accessToken } = useAppSelector((state) => state.user);
	const { isActivePWA } = useAppSelector((state) => state.general);
	const { ws } = useContext(ChatContext);
	const [isOpenModal, openModal, closeModal] = useModal();
	const { onClickSusbribeToPushNotification, userSubscription, loading } = usePushNotifications();
	const [postMessage] = usePostMessageMutation();

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

	const connectWebSocket = (): void => {
		if (ws === null) {
			return;
		}

		ws.current = new WebSocket(
			`${import.meta.env.VITE_API_WEB_SOCKET_URL}/chat/?token=${accessToken}`
		);

		ws.current.onopen = () => console.log('ws opened');

		ws.current.onclose = () => console.log('ws closed');

		ws.current.onmessage = (event) => {
			try {
				const json: WSMessage = JSON.parse(event.data);

				if (json.errors.length || json.message.parent !== null) {
					return;
				}

				dispatch(
					addMessage({
						...json.message,
						newMessage: !(json.message.author === Author.USER),
					} as Message)
				);
			} catch {
				throw new Error();
			}
		};
	};

	useEffect(() => {
		if (ws === null) {
			return;
		}

		connectWebSocket();

		// eslint-disable-next-line consistent-return
		return () => {
			if (ws.current) {
				ws.current.close();
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
		postMessage({ action: 'MESSAGE', content: inputValue })
			.unwrap()
			.then(() => {
				dispatch(setSessionBlock(SessionBlocks.CHAT));
				dispatch(setInputValue(''));
			});
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

export default SessionPage;
