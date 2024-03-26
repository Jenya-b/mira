import { FC } from 'react';

import { randomHints } from '@/constants/chat';
import { useAppDispatch } from '@/store';
import { setInputValue } from '@/store/chat';

import { List, Logo, Title, Wrapper } from './FirstBlock.styled';

export const FirstBlock: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<Wrapper>
			<Logo />
			<Title>Что у вас случилось?</Title>
			<List>
				{randomHints.map((item) => (
					<li key={item}>
						<button onClick={() => dispatch(setInputValue(item))}>{item}</button>
					</li>
				))}
			</List>
		</Wrapper>
	);
};
