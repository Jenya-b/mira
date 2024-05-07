import styled from 'styled-components';

import { ButtonPrimary } from '@/styles/components';

export const Title = styled.h2`
	font-size: 2.14286rem;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.04286rem;
	color: ${({ theme }) => theme.colors.textPrimary};
	text-align: center;
`;

export const ImageWrap = styled.div`
	margin-top: 1.9rem;
	display: flex;
	justify-content: center;

	img {
		max-width: 24.07143rem;
		width: 100%;
	}
`;

export const Button = styled(ButtonPrimary)`
	margin-top: 1.9rem;
`;

export const CopyBlock = styled.div`
	margin-top: 1.9rem;
	display: flex;
	justify-content: center;
`;

export const ButtonLink = styled.p`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.57143rem;
	letter-spacing: -0.02286rem;
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.3rem;
	border-radius: 0.42857rem;
	background: rgba(255, 255, 255, 0.16);
	width: 11.71429rem;
`;
