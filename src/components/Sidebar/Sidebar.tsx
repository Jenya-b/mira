import { Avatar } from '@mui/material';
import { FC } from 'react';

import addIcon from '@/assets/images/icons/add.svg';
import avatarIcon from '@/assets/images/icons/avatar.svg';
import listIcon from '@/assets/images/icons/list.svg';
import logoutIcon from '@/assets/images/icons/logout.svg';
import okIcon from '@/assets/images/icons/okey.svg';
import settingsIcon from '@/assets/images/icons/settings.svg';
import { sidebarMenu } from '@/constants/menu';

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

export const Sidebar: FC = () => (
	<Wrapper>
		<Logo />
		<SessionBlock>
			<ButtonPrimory>
				<img src={okIcon} alt="ok" />
				<p>7 доступных сессий</p>
			</ButtonPrimory>
			<ButtonPrimory>
				<img src={addIcon} alt="add" />
				<p>7 доступных сессий</p>
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
			{sidebarMenu.map(({ title }) => (
				<li key={title}>{title}</li>
			))}
		</MenuBlock>
		<ProfileBlock>
			<Avatar alt="avatar" src={avatarIcon} />
			<UserName>Глеб</UserName>
			<LogoutBtn>
				<p>Выйти</p>
				<img src={logoutIcon} alt="" />
			</LogoutBtn>
		</ProfileBlock>
	</Wrapper>
);
