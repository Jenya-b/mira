import styled, { css } from 'styled-components';

export const Container = styled.div`
	max-width: 33rem;
	width: 100%;
`;

export const Desc = styled.div`
	margin-top: 3.29rem;
	padding: 2.17857rem 1rem 2.67857rem 2.92857rem;
	border-radius: 1.42857rem;
	background: #2d327e;
`;

const textCss = css`
	font-size: 1.42857rem;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
`;

export const Title = styled.p`
	color: #fff;
	${textCss}
`;

export const List = styled.ul`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;

	li {
		${textCss}
		position: relative;
		color: #ffe0dd;
		padding-left: 2.3rem;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 0.8rem;
			transform: translateY(-50%);
			width: 0.4rem;
			height: 0.4rem;
			border-radius: 50%;
			background: #ffe0dd;
		}
	}
`;

export const Button = styled.button`
	margin-top: 0.64rem;
	width: 100%;
	height: 5.78571rem;
	border-radius: 1.42857rem;
	background: #4eb97f;

	color: #fff;
	font-size: 1.57143rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.03143rem;
`;
