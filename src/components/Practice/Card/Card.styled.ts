import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	padding: 1.79rem;
	border-radius: 1.71429rem;
	background: ${({ theme }) => theme.colors.bgPrimary};
	position: relative;
	display: flex;
	flex-direction: column;
	height: max-content;

	&.training {
		z-index: ${({ theme }) => theme.order.mainIndex};
	}
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
	opacity: 0.6;

	span {
		padding-top: 0.2rem;
	}

	&.favorites {
		opacity: 1;
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

	&.training {
		position: relative;
		z-index: ${({ theme }) => theme.order.firstIndex};
	}
`;

export const Button2 = styled.button`
	${buttonCss}
	color: ${({ theme }) => theme.colors.textPrimary};
	opacity: 0.9;
	background: #3b3f8c;

	&.training {
		position: relative;
		z-index: ${({ theme }) => theme.order.firstIndex};
	}
`;

export const Button3 = styled.button`
	${buttonCss}
	color: ${({ theme }) => theme.colors.textPrimary};
	border: 1px solid rgba(255, 255, 255, 0.7);
	opacity: 0.7;
	background: none;

	&.training {
		position: relative;
		z-index: ${({ theme }) => theme.order.firstIndex};
	}
`;

export const Button4 = styled.button`
	${buttonCss}
	padding: 0;
	color: #f8c0c0;
	background: none;
	height: 2rem;
	text-decoration-line: underline;

	&.training {
		position: relative;
		z-index: ${({ theme }) => theme.order.firstIndex};
	}
`;

export const DisabledBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: ${({ theme }) => theme.order.lastIndex};
`;

export const FilterBg = styled.div`
	background: rgba(0, 0, 0, 0.05);
	backdrop-filter: blur(5px);
	border-radius: 1.71429rem;
	position: absolute;
	width: 100%;
	height: 100%;
`;
