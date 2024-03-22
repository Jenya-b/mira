import { FC } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { router } from '@/router';
import { store } from '@/store';
import GlobalStyles from '@/styles/global';
import { theme } from '@/styles/theme';

const App: FC = () => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
			<GlobalStyles />
		</ThemeProvider>
	</Provider>
);

export default App;
