import { MouseEvent, FC, useEffect, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { BaseModal } from '../Modal/Modal';
import { Sidebar } from '../Sidebar/Sidebar';

import modalTimeIcon from '@/assets/images/icons/time.svg';
import modalSmileIcon from '@/assets/images/smile4.png';
import { Notification, NotificationContext, NotificationState } from '@/context/notification';
import { useModal } from '@/hooks/useModal';
import { useResize } from '@/hooks/useResize';
import { useAppDispatch, useAppSelector } from '@/store';
import { flagMessages } from '@/store/chat';
import { setOpenBurgerMenu } from '@/store/general';

import { Wrapper } from './Layout.styled';

export const Layout: FC = () => {
	const location = useLocation();
	const [innerWidth, innerHeight] = useResize();
	const dispatch = useAppDispatch();
	const { isOpenBurgerMenu } = useAppSelector((state) => state.general);
	const { accessToken } = useAppSelector((state) => state.user);
	const { ws } = useContext(NotificationContext);
	const [isOpenModalSessionExpires, openModalSessionExpires, closeModalSessionExpires] = useModal();
	const [isOpenModalSessionEnded, openModalSessionEnded, closeModalSessionEnded] = useModal();

	useEffect(() => {
		dispatch(flagMessages());
	}, [location.pathname]);

	useEffect(() => {
		if (ws === null) {
			return;
		}

		ws.current = new WebSocket(
			`${import.meta.env.VITE_API_WEB_SOCKET_URL}/notifications/?token=${accessToken}`
		);

		ws.current.onopen = () => console.log('ws opened');

		ws.current.onclose = () => console.log('ws closed');

		ws.current.onmessage = (event) => {
			try {
				const json: Notification = JSON.parse(event.data);

				if (json && json?.type === NotificationState.END_SESSION) {
					openModalSessionExpires();
				} else if (json && json?.type === NotificationState.CLOSE_SESSION) {
					openModalSessionEnded();
				}
			} catch {
				throw new Error();
			}
		};

		// eslint-disable-next-line consistent-return
		return () => {
			if (ws.current) {
				ws.current.close();
			}
		};
	}, []);

	useEffect(() => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, [innerHeight]);

	const handleClick = (e: MouseEvent): void => {
		const element = e.target as HTMLElement;

		if (isOpenBurgerMenu && !(element.id === 'burger-menu' || element.id === 'sidebar-menu')) {
			dispatch(setOpenBurgerMenu(false));
		}
	};

	return (
		<Wrapper onClick={handleClick}>
			{innerWidth > 1000 ? <Sidebar /> : <BurgerMenu />}
			<Outlet />
			<BaseModal
				buttonText="Понятно"
				title="До конца сессии осталось 3 часа"
				subtitle="Временной интервал для завершения сессии - 24 часа"
				desc="Исследования показывают, что в этот период эффективность терапии будет максимальной"
				imgSrc={modalTimeIcon}
				isOpen={isOpenModalSessionExpires}
				handleClickModal={closeModalSessionExpires}
				closeModal={closeModalSessionExpires}
			/>
			<BaseModal
				buttonText="Продолжить"
				title="Извините, но время сессии истекло"
				subtitle="Временной интервал для завершения сессии - 24 часа"
				imgSrc={modalSmileIcon}
				isOpen={isOpenModalSessionEnded}
				handleClickModal={closeModalSessionEnded}
				closeModal={closeModalSessionEnded}
			/>
		</Wrapper>
	);
};
