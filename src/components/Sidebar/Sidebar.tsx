import { Avatar } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import addIcon from '@/assets/images/icons/add.svg';
import avatarIcon from '@/assets/images/icons/avatar.svg';
import listIcon from '@/assets/images/icons/list.svg';
import logoutIcon from '@/assets/images/icons/logout.svg';
import okIcon from '@/assets/images/icons/okey.svg';
import settingsIcon from '@/assets/images/icons/settings.svg';
import { sidebarMenu } from '@/constants/menu';
import { path } from '@/router/path';
import { useAppDispatch, useAppSelector } from '@/store';
import { resetState as resetStateAuth } from '@/store/auth';
import { resetState as resetStateChat } from '@/store/chat';
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
	const { user } = useAppSelector((state) => state.user);

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

		setTimeout(() => navigate(href));
	};

	return (
		<Wrapper>
			<Logo />
			<SessionBlock>
				<ButtonPrimory>
					<img src={okIcon} alt="ok" />
					<p>7 доступных сессий</p>
				</ButtonPrimory>
				<ButtonPrimory onClick={() => handleNavigate(path.home)}>
					<img src={addIcon} alt="add" />
					<p>Начать новую сессию</p>
				</ButtonPrimory>
			</SessionBlock>
			<CardBlock>
				<ButtonSecondary>
					<img src={listIcon} alt="list" />
					<p>Карточки</p>
				</ButtonSecondary>
				<ButtonSecondary>
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
