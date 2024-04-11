import styled from 'styled-components';

import { ButtonPrimary } from '@/styles/components';

export const ImageWrap = styled.div`
	display: flex;
	justify-content: center;

	img {
		width: 6.42857rem;
		height: 6.42857rem;
	}
`;

export const Title = styled.h2`
	margin-top: 2.64rem;
	font-size: 2.14286rem;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.04286rem;
	color: ${({ theme }) => theme.colors.textPrimary};
	text-align: center;
`;

export const Subtitle = styled.h3`
	margin-top: 2.64rem;
	font-size: 1.42857rem;
	font-weight: 400;
	line-height: 120%;
	color: ${({ theme }) => theme.colors.textPrimary};
	text-align: center;
`;

export const Button = styled(ButtonPrimary)`
	margin-top: 2.07rem;
`;
