import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../Sidebar/Sidebar';

import { Wrapper } from './Layout.styled';

export const Layout: FC = () => (
	<Wrapper>
		<Sidebar />
		<Suspense fallback={<div>Loading...</div>}>
			<Outlet />
		</Suspense>
	</Wrapper>
);
