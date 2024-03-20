import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/global';
import { theme } from '@/styles/theme';

const App: FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
	</ThemeProvider>
);

export default App;
