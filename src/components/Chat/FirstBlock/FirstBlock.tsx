import { useSpring } from '@react-spring/web';
import { FC } from 'react';

import { randomHints } from '@/constants/chat';
import { useAppDispatch } from '@/store';
import { setInputValue } from '@/store/chat';

import { List, Logo, Title, Wrapper, Container } from './FirstBlock.styled';

export const FirstBlock: FC = () => {
	const dispatch = useAppDispatch();

	const springs = useSpring({
		from: { y: 1000, opacity: 0 },
		to: { y: 0, opacity: 1 },
	});

	return (
		<Wrapper style={springs}>
			<Container>
				<Logo />
				<Title>Что у вас случилось?</Title>
				<List>
					{randomHints.map((item) => (
						<li key={item}>
							<button onClick={() => dispatch(setInputValue(item))}>{item}</button>
						</li>
					))}
				</List>
			</Container>
		</Wrapper>
	);
};
