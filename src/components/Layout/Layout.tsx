import { Collapse } from '@mui/material';
import { FC, Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../Sidebar/Sidebar';
import { ButtonSecondary } from '../Sidebar/Sidebar.styled';

import listIcon from '@/assets/images/icons/list.svg';
import settingsIcon from '@/assets/images/icons/settings.svg';
import { useResize } from '@/hooks/useResize';

import {
	BurgerBtn,
	ButtonGroup,
	CountSession,
	MobMenu,
	MobMenuWrap,
	Wrapper,
} from './Layout.styled';

export const Layout: FC = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [innerWidth] = useResize();

	return (
		<Wrapper>
			{innerWidth > 1000 ? (
				<Sidebar />
			) : (
				<MobMenu>
					<MobMenuWrap>
						<BurgerBtn onClick={() => setIsOpenMenu(!isOpenMenu)}>
							<span className={isOpenMenu ? 'active' : ''} />
						</BurgerBtn>
						<ButtonGroup>
							<ButtonSecondary>
								<img src={listIcon} alt="list" />
								<p>Карточки</p>
							</ButtonSecondary>
							<ButtonSecondary>
								<img src={settingsIcon} alt="setting" />
								<p>Тренажер</p>
							</ButtonSecondary>
						</ButtonGroup>
						<CountSession>
							<p>22</p>
						</CountSession>
					</MobMenuWrap>
					<Collapse in={isOpenMenu}>
						<Sidebar />
					</Collapse>
				</MobMenu>
			)}
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</Wrapper>
	);
};
