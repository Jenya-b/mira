import { Avatar } from '@mui/material';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import arrowRight from '@/assets/images/icons/arrow-right_round.svg';
import avatarIcon from '@/assets/images/icons/avatar.svg';
import homeIcon from '@/assets/images/icons/home.svg';
import listIcon from '@/assets/images/icons/list.svg';
import logoutIcon from '@/assets/images/icons/logout.svg';
import okIcon from '@/assets/images/icons/okey.svg';
import noOkIcon from '@/assets/images/icons/okey_noactive.svg';
import settingsIcon from '@/assets/images/icons/settings.svg';
import { sidebarMenu } from '@/constants/menu';
import { path } from '@/router/path';
import { useAppDispatch, useAppSelector } from '@/store';
import { resetState as resetStateAuth } from '@/store/auth';
import { SessionBlocks, resetState as resetStateChat, setSessionBlock } from '@/store/chat';
import { resetState as resetStateUser } from '@/store/user';

import {
	ButtonPrimory,
	ButtonSecondary,
	CardBlock,
	Logo,
	LogoutBtn,
	MenuBlock,
	ProfileBlock,
	SessionBlock,
	UserName,
	Wrapper,
} from './Sidebar.styled';

interface SidebarProps {
	closeMenu?: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ closeMenu }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { user } = useAppSelector((state) => state.user);
	const { currentSession } = useAppSelector((state) => state.chat);

	const logout = (): void => {
		localStorage.removeItem('accessToken');
		dispatch(resetStateAuth());
		dispatch(resetStateChat());
		dispatch(resetStateUser());
		navigate(path.auth);
	};

	const handleNavigate = (href: string): void => {
		if (closeMenu) {
			closeMenu();
		}

		if (user?.available_sessions === 0) {
			dispatch(setSessionBlock(SessionBlocks.END_SESSION));
		} else {
			dispatch(setSessionBlock(SessionBlocks.HOME));
		}

		setTimeout(() => navigate(href));
	};

	const handleOpenActiveSession = (): void => {
		if (currentSession === null) {
			return;
		}

		if (currentSession.active && currentSession.messages.length) {
			dispatch(setSessionBlock(SessionBlocks.CHAT));
		} else {
			dispatch(setSessionBlock(SessionBlocks.FIRST));
		}

		navigate(path.home);
	};

	return (
		<Wrapper id="sidebar-menu">
			<Logo />
			<SessionBlock>
				{currentSession && currentSession.active ? (
					<ButtonPrimory onClick={handleOpenActiveSession}>
						<img src={arrowRight} alt="" />
						<p>Продолжить сессию</p>
					</ButtonPrimory>
				) : user && user.available_sessions ? (
					<ButtonPrimory>
						<img src={okIcon} alt="" />
						<p>{user.available_sessions} доступных сессий</p>
					</ButtonPrimory>
				) : (
					<ButtonPrimory onClick={() => handleNavigate(path.rates)}>
						<img src={noOkIcon} alt="" />
						<p className="noactive">
							<span>
								<strong>{user?.available_sessions ?? ''}</strong> доступных сессий
							</span>
							<span>Приобрести сессии</span>
						</p>
					</ButtonPrimory>
				)}
				<ButtonPrimory onClick={() => handleNavigate(path.home)}>
					<img src={homeIcon} alt="" />
					<p>На главный экран</p>
				</ButtonPrimory>
			</SessionBlock>
			<CardBlock>
				<ButtonSecondary to={path.practice} state={{ backPath: location.pathname }}>
					<img src={listIcon} alt="list" />
					<p>Карточки</p>
				</ButtonSecondary>
				<ButtonSecondary to={path.exerciserSession}>
					<img src={settingsIcon} alt="setting" />
					<p>Тренажер</p>
				</ButtonSecondary>
			</CardBlock>
			<MenuBlock>
				{sidebarMenu.map((item) => (
					<li key={item.title}>
						<button onClick={() => handleNavigate(item.path)}>{item.title}</button>
					</li>
				))}
			</MenuBlock>
			<ProfileBlock>
				<Avatar alt="avatar" src={avatarIcon} />
				<UserName>{user?.first_name}</UserName>
				<LogoutBtn onClick={logout}>
					<p>Выйти</p>
					<img src={logoutIcon} alt="" />
				</LogoutBtn>
			</ProfileBlock>
		</Wrapper>
	);
};
