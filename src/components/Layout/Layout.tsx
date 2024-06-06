import { MouseEvent, FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Sidebar } from '../Sidebar/Sidebar';

import { useResize } from '@/hooks/useResize';
// import { path } from '@/router/path';
import { useGetLastSessionQuery } from '@/services/api/session';
import { useAppDispatch, useAppSelector } from '@/store';
import { flagMessages } from '@/store/chat';
import { setOpenBurgerMenu } from '@/store/general';

import { Wrapper } from './Layout.styled';

export const Layout: FC = () => {
	const location = useLocation();
	const [innerWidth, innerHeight] = useResize();
	const dispatch = useAppDispatch();
	const { isOpenBurgerMenu } = useAppSelector((state) => state.general);
	// const { user } = useAppSelector((state) => state.user);
	useGetLastSessionQuery(null);

	useEffect(() => {
		dispatch(flagMessages());
	}, [location.pathname]);

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

	// if (user !== null && !user.intro_passed) {
	// 	return <Navigate to={path.intro} />;
	// }

	// if (user !== null && !user.training_after_intro_passed) {
	// 	return <Navigate to={path.training} />;
	// }

	return (
		<Wrapper onClick={handleClick}>
			{innerWidth > 1000 ? <Sidebar /> : <BurgerMenu />}
			<Outlet />
		</Wrapper>
	);
};
