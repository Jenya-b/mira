import styled from 'styled-components';

export const ButtonPrimary = styled.button`
	background: ${({ theme }) => theme.colors.buttonBgPrimary};
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1.57143rem;
	font-weight: 500;
	letter-spacing: -0.03143rem;
	height: 5.78571rem;
	width: 100%;
	border-radius: 1.42857rem;

	&:hover {
		border-radius: 1.42857rem;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%),
			${({ theme }) => theme.colors.buttonBgPrimary};
	}

	&:disabled {
		background: ${({ theme }) => theme.colors.buttonBgDisabled};
		color: ${({ theme }) => theme.colors.buttonTextDisabled};
	}
`;
