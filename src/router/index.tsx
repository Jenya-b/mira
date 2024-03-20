import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout/Layout';
import { HomePage } from '@/pages';

import { path } from './path';

export const router = createBrowserRouter([
	{
		path: path.home,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);
