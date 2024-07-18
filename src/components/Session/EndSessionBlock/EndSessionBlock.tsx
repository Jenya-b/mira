import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { descEndSession } from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { path } from '@/router/path';

import { Button, Container, Desc, List, Title } from './EndSessionBlock.styled';

export const EndSessionBlock: FC = () => {
	const navigate = useNavigate();

	return (
		<WithChat title="Извините, у вас закончились сессии c Мирой">
			<Container>
				<Desc>
					<Title>Ограничен функционал:</Title>
					<List>
						{descEndSession.map((item) => (
							<li key={item}>{item}</li>
						))}
					</List>
				</Desc>
				<Button onClick={() => navigate(path.rates)}>Обновить пакет сессий</Button>
			</Container>
		</WithChat>
	);
};
