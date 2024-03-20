import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { router } from '@/router';
import GlobalStyles from '@/styles/global';
import { theme } from '@/styles/theme';

const App: FC = () => (
	<ThemeProvider theme={theme}>
		<RouterProvider router={router} />
		<GlobalStyles />
	</ThemeProvider>
);

export default App;
