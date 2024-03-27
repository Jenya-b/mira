import { FC } from 'react';

import { smiles } from '@/constants/feedback';
import { WithChat } from '@/hocs/WithChat/WithChat';

import { List } from './Feedback.styled';

export const Feedback: FC = () => (
	<WithChat title="Как вы себя чувствуете после сессии?">
		<List>
			{smiles.map(({ img, title }) => (
				<li key={title}>
					<button>
						<img src={img} alt="smile" />
						<span>{title}</span>
					</button>
				</li>
			))}
		</List>
	</WithChat>
);
