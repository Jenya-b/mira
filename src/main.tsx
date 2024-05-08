import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/components/App/App';

import { store } from './store';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js', { scope: '/' });
	});
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw2.js', { scope: '/' });
	});
}

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
