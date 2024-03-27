import { FC } from 'react';

import { randomHints } from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { useAppDispatch } from '@/store';
import { setInputValue } from '@/store/chat';

import { List } from './FirstBlock.styled';

export const FirstBlock: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<WithChat title="Что у вас случилось?">
			<List>
				{randomHints.map((item) => (
					<li key={item}>
						<button onClick={() => dispatch(setInputValue(item))}>{item}</button>
					</li>
				))}
			</List>
		</WithChat>
	);
};
