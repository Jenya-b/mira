import { FC, useContext, useEffect } from 'react';

import { Input } from '@/components/ChatElements/Input/Input';
import { ExerciserContext } from '@/context/exerciser';
import { useAppSelector } from '@/store';
import { SessionBlocks } from '@/store/exerciserSession';

import { Wrapper } from './ExerciserSession.styled';

const ExerciserSession: FC = () => {
	const { hiddenInput, sessionBlock } = useAppSelector((state) => state.exerciserSession);
	const { accessToken } = useAppSelector((state) => state.user);
	const { ws } = useContext(ExerciserContext);

	const renderSessionBlock = (): JSX.Element => <></>;

	const sendMessage = (): void => {};

	const connectWebSocket = (): void => {
		if (ws === null) {
			return;
		}

		ws.current = new WebSocket(
			`${import.meta.env.VITE_API_WEB_SOCKET_URL}/exerciser/?token=${accessToken}`
		);

		ws.current.onopen = () => console.log('ws opened');

		ws.current.onclose = () => console.log('ws closed');

		ws.current.onmessage = (event) => {
			try {
				const json = JSON.parse(event.data);
				console.log(json);
			} catch {
				throw new Error();
			}
		};
	};

	useEffect(() => {
		if (ws === null) {
			return;
		}

		connectWebSocket();

		// eslint-disable-next-line consistent-return
		return () => {
			if (ws.current) {
				ws.current.close();
			}
		};
	}, []);

	return (
		<Wrapper
			className={!hiddenInput || (hiddenInput && sessionBlock === SessionBlocks.CHAT) ? 'grid' : ''}
		>
			{renderSessionBlock()}
			<Input sendMessage={sendMessage} />
		</Wrapper>
	);
};

export default ExerciserSession;
