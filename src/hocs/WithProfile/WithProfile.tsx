import { FC } from 'react';

import { Container, Subtitle, Title, Wrapper } from './WithProfile.styled';

interface WithProfileProps {
	userName: string;
	subtitle: string;
	children: JSX.Element;
}

export const WithProfile: FC<WithProfileProps> = ({ userName, subtitle, children }) => (
	<Wrapper>
		<Container>
			<Title>Привет, {userName}!</Title>
			<Subtitle>{subtitle}</Subtitle>
			{children}
		</Container>
	</Wrapper>
);
