import { FC } from 'react';

import { descEndSession } from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';

import { Button, Container, Desc, List, Title } from './EndSessionBlock.styled';

export const EndSessionBlock: FC = () => (
	<WithChat title="Извините, у вас закончились сессии">
		<Container>
			<Desc>
				<Title>Ограничен функционал:</Title>
				<List>
					{descEndSession.map((item) => (
						<li key={item}>{item}</li>
					))}
				</List>
			</Desc>
			<Button>Обновить пакет сессий</Button>
		</Container>
	</WithChat>
);
