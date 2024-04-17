import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Sidebar } from '../Sidebar/Sidebar';

import { useResize } from '@/hooks/useResize';

import { Wrapper } from './Layout.styled';

export const Layout: FC = () => {
	const [innerWidth, innerHeight] = useResize();

	useEffect(() => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, [innerHeight]);

	return (
		<Wrapper>
			{innerWidth > 1000 ? <Sidebar /> : <BurgerMenu />}
			<Outlet />
		</Wrapper>
	);
};
