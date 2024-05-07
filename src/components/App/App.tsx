import { FC, Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Loader } from '../Loader/Loader';

import { useAddToHomescreenPrompt } from '@/hooks/useAddToHomescreenPrompt';
import { router } from '@/router';
import { useAppDispatch } from '@/store';
import { setActivePWA, setDeviceType, setPromptState } from '@/store/general';
import GlobalStyles from '@/styles/global';
import { theme } from '@/styles/theme';

const App: FC = () => {
	const dispatch = useAppDispatch();
	const [prompt] = useAddToHomescreenPrompt();

	useEffect(() => {
		if (navigator) {
			dispatch(setDeviceType(navigator.userAgent));
		}
	}, []);

	useEffect(() => {
		dispatch(setPromptState(prompt));

		if (window.matchMedia('(display-mode: standalone)').matches) {
			dispatch(setActivePWA(true));
		} else {
			dispatch(setActivePWA(false));
		}
	}, [prompt]);

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<Loader />}>
				<RouterProvider router={router} />
			</Suspense>
			<GlobalStyles />
		</ThemeProvider>
	);
};

export default App;
