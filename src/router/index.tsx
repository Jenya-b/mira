import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout/Layout';
import { RequireAuth } from '@/hocs/RequireAuth/RequireAuth';
import { AuthPage, HomePage } from '@/pages';

import { path } from './path';

export const router = createBrowserRouter([
	{
		path: path.home,
		element: (
			<RequireAuth>
				<Layout />
			</RequireAuth>
		),
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
	{
		path: path.auth,
		element: <AuthPage />,
	},
]);
