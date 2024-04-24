import { useEffect, useRef } from 'react';

import { useAppSelector } from '@/store';

export const useChat = (): void => {
	const { accessToken } = useAppSelector((state) => state.user);
	const ws = useRef<WebSocket | null>(null);

	useEffect(() => {
		ws.current = new WebSocket(
			`${import.meta.env.VITE_API_WEB_SOCKET_URL}/chat/?token=${accessToken}`
		);

		ws.current.onopen = () => console.log('ws opened');

		ws.current.onclose = () => console.log('ws closed');

		ws.current.onmessage = function (event) {
			try {
				console.log(event);
			} catch {
				throw new Error();
			}
		};

		const wsCurrent = ws.current;

		return () => {
			wsCurrent.close();
		};
	}, [accessToken]);
};
