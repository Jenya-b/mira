import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Loader } from '../Loader/Loader';

import { router } from '@/router';
import { store } from '@/store';
import GlobalStyles from '@/styles/global';
import { theme } from '@/styles/theme';

const App: FC = () => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Suspense fallback={<Loader />}>
				<RouterProvider router={router} />
			</Suspense>
			<GlobalStyles />
		</ThemeProvider>
	</Provider>
);

export default App;
