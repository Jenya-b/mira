import styled, { css } from 'styled-components';

import { ButtonPrimary } from '@/styles/components';

export const Container = styled.div`
	max-width: 33rem;
	width: 100%;
`;

export const Desc = styled.div`
	margin-top: 3.29rem;
	padding: 2.17857rem 1rem 2.67857rem 2.92857rem;
	border-radius: 1.42857rem;
	background: #2d327e;

	@media (max-width: 768px) {
		margin-top: 2.5rem;
		padding: 2.36rem 2.43rem 2rem 2.07rem;
	}
`;

const textCss = css`
	font-size: 1.42857rem;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;

	@media (max-width: 768px) {
		font-size: 1.14286rem;
	}
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

	@media (max-width: 768px) {
		row-gap: 0.35rem;
	}

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

export const Button = styled(ButtonPrimary)`
	margin-top: 0.64rem;
`;
