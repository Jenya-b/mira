import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import { Layout } from '@/components/Layout/Layout';
import { ChatProvider } from '@/context/chat';
import { NotificationProvider } from '@/context/notification';
import { RequireAuth } from '@/hocs/RequireAuth/RequireAuth';
import { RequireIntro } from '@/hocs/RequireIntro/RequireIntro';
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
	ReviewPage,
	PracticePage,
} from '@/pages';

import { path } from './path';

export const router = createBrowserRouter([
	{
		path: path.home,
		errorElement: <ErrorBoundary />,
		element: (
			<RequireAuth>
				<RequireIntro>
					<NotificationProvider>
						<Layout />
					</NotificationProvider>
				</RequireIntro>
			</RequireAuth>
		),
		children: [
			{
				index: true,
				element: (
					<ChatProvider>
						<HomePage />
					</ChatProvider>
				),
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
			{
				path: path.review,
				element: <ReviewPage />,
			},
			{
				path: path.practice,
				element: <PracticePage />,
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
			<RequireAuth>
				<IntroPage />
			</RequireAuth>
		),
	},
]);
