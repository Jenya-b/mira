import styled, { css } from 'styled-components';

export const Title = styled.h2`
	font-size: 1.71429rem;
	font-weight: 500;
	line-height: 1.85714rem;
	letter-spacing: -0.03429rem;
	color: ${({ theme }) => theme.colors.textPrimary};
`;

const buttonCss = css`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	width: 100%;
	height: 4.28571rem;
	border-radius: 0.85714rem;
`;

export const ButtonOK = styled.button`
	margin-top: 3rem;
	${buttonCss}
	border: 1px solid ${({ theme }) => theme.colors.textPrimary};
	background: none;
`;

export const ButtonCancel = styled.button`
	margin-top: 0.71rem;
	${buttonCss}
	background: ${({ theme }) => theme.colors.buttonBgPrimary};
`;
