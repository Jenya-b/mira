import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout/Layout';
// import { RequireAuth } from '@/hocs/RequireAuth/RequireAuth';
import {
	AuthPage,
	HomePage,
	InfoRequestPage,
	IntroPage,
	QuestionsPage,
	RatesPage,
	TherapySettingsPage,
	TrainingPage,
	UserDataPage,
} from '@/pages';

import { path } from './path';

export const router = createBrowserRouter([
	{
		path: path.home,
		element: (
			// <RequireAuth>
			<Layout />
			// </RequireAuth>
		),
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: path.questions,
				element: <QuestionsPage />,
			},
			{
				path: path.rates,
				element: <RatesPage />,
			},
			{
				path: path.request,
				element: <InfoRequestPage />,
			},
			{
				path: path.userData,
				element: <UserDataPage />,
			},
			{
				path: path.therapySettings,
				element: <TherapySettingsPage />,
			},
			{
				path: path.training,
				element: <TrainingPage />,
			},
		],
	},
	{
		path: path.auth,
		element: <AuthPage />,
	},
	{
		path: path.intro,
		element: (
			// <RequireAuth>
			<IntroPage />
			// </RequireAuth>
		),
	},
]);
