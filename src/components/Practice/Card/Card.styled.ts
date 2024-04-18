import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	padding: 1.79rem;
	border-radius: 1.71429rem;
	background: ${({ theme }) => theme.colors.bgPrimary};
	position: relative;
	display: flex;
	flex-direction: column;
	height: max-content;
`;

export const Info = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Date = styled.p`
	font-size: 0.85714rem;
	font-weight: 500;
	line-height: 2.85714rem;
	letter-spacing: -0.01714rem;
	opacity: 0.5;
`;

export const Favorites = styled.button`
	display: flex;
	align-items: center;
	column-gap: 0.36rem;
	font-size: 0.85714rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.85714rem;
	letter-spacing: -0.01714rem;
	text-decoration-line: underline;
	color: ${({ theme }) => theme.colors.textPrimary};
	background: none;

	span {
		padding-top: 0.2rem;
	}

	&.favorites {
		opacity: 0.6;
	}
`;

export const Controls = styled.div`
	margin-top: 2.07rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.71rem;
`;

const buttonCss = css`
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	border-radius: 0.71429rem;
	padding: 1rem 1.38rem;
`;

export const Button1 = styled.button`
	${buttonCss}
	color: ${({ theme }) => theme.colors.textPrimary};
	background: #488ce1;
`;

export const Button2 = styled.button`
	${buttonCss}
	color: ${({ theme }) => theme.colors.textPrimary};
	opacity: 0.9;
	background: #3b3f8c;
`;

export const Button3 = styled.button`
	${buttonCss}
	color: ${({ theme }) => theme.colors.textPrimary};
	border: 1px solid rgba(255, 255, 255, 0.7);
	opacity: 0.7;
	background: none;
`;

export const Button4 = styled.button`
	${buttonCss}
	padding: 0;
	color: #f8c0c0;
	background: none;
	height: 2rem;
	text-decoration-line: underline;
`;
