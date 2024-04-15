import styled from 'styled-components';

export const Button = styled.button`
	border-radius: 1.42857rem;
	background: ${({ theme }) => theme.colors.buttonBgPrimary};
	width: 21rem;
	height: 5.78571rem;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1.57143rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.03143rem;

	@media (max-width: 1000px) {
		position: fixed;
		bottom: 1.36rem;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 4.28571rem;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.08571rem;
	max-width: 49.35714rem;
	width: 100%;

	&.black {
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;

export const Subtitle = styled.h3`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1.42857rem;
	font-weight: 500;
	letter-spacing: -0.02857rem;
	max-width: 30.85714rem;
	width: 100%;

	&.black {
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;
