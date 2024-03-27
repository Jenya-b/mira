import { useSpring } from '@react-spring/web';
import { FC } from 'react';

import { Container, Logo, Title, Wrapper } from './WithChat.styled';

interface WithCharProps {
	title: string;
	children: JSX.Element;
}

export const WithChat: FC<WithCharProps> = ({ title, children }) => {
	const springs = useSpring({
		from: { y: 1000, opacity: 0 },
		to: { y: 0, opacity: 1 },
	});

	return (
		<Wrapper style={springs}>
			<Container>
				<Logo />
				<Title>{title}</Title>
				{children}
			</Container>
		</Wrapper>
	);
};
