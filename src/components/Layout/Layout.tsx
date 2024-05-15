import { MouseEvent, FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Sidebar } from '../Sidebar/Sidebar';

import { useResize } from '@/hooks/useResize';
import { useGetLastSessionQuery } from '@/services/api/session';
import { useAppDispatch, useAppSelector } from '@/store';
import { setOpenBurgerMenu } from '@/store/general';

import { Wrapper } from './Layout.styled';

export const Layout: FC = () => {
	const [innerWidth, innerHeight] = useResize();
	const dispatch = useAppDispatch();
	const { isOpenBurgerMenu } = useAppSelector((state) => state.general);
	useGetLastSessionQuery(null);

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
		</Wrapper>
	);
};
