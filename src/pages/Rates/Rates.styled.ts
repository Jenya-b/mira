import styled from 'styled-components';

import { ButtonPrimary } from '@/styles/components';

export const Wrapper = styled.div`
	padding: 8.64rem 1.21rem 2rem 1.21rem;
	display: grid;
	grid-template-columns: 1fr minmax(auto, 80rem) 1fr;
	height: 100vh;
	overflow: auto;
`;

export const Container = styled.div`
	grid-column: 2/3;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h2`
	font-size: 3.28571rem;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.06571rem;
	text-align: center;

	@media (max-width: 768px) {
		text-align: start;
		font-size: 2.14286rem;
	}
`;

export const RatesWrap = styled.div`
	margin-top: 4.63rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
	column-gap: 0.71rem;
	row-gap: 0.71rem;

	@media (max-width: 480px) {
		margin-top: 2.71rem;
	}
`;

export const CardWrap = styled.div`
	padding: 2.14rem 2.07rem;
	border-radius: 1.42857rem;
	background: ${({ theme }) => theme.colors.bgPrimary};
	display: grid;
	grid-template: 2.214rem max-content 1fr repeat(2, max-content) / 1fr;

	&:nth-child(2) {
		background: ${({ theme }) => theme.colors.bgSecondary};
	}

	@media (max-width: 480px) {
		grid-template: repeat(2, max-content) 1fr repeat(2, max-content) / 1fr;
	}
`;

export const Discount = styled.div`
	height: 2.214rem;
	width: 7.714rem;
	border-radius: 1.48593rem;
	background: ${({ theme }) => theme.colors.bgTertiary};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.71429rem;
	font-weight: 600;
	line-height: 120%;
	letter-spacing: 0.07143rem;
	text-transform: uppercase;
`;

export const CardTitle = styled.h3`
	margin-top: 1.36rem;
	font-size: 1.71429rem;
	font-weight: 700;
	line-height: 120%;
`;

export const Services = styled.ul`
	margin-top: 2.43rem;
	display: flex;
	flex-direction: column;
	row-gap: 1.43rem;

	li {
		position: relative;
		padding-left: 1.4rem;
		font-size: 1.14286rem;
		font-weight: 400;
		line-height: 120%;

		&::before {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			content: '';
			width: 0.64286rem;
			height: 0.64286rem;
			border-radius: 50%;
			background: #fff;
		}

		span {
			opacity: 0.8;
		}
	}
`;

export const Button = styled(ButtonPrimary)`
	margin-top: 2.5rem;
`;

export const Price = styled.p`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	text-align: center;

	span {
		&:nth-child(1) {
			font-size: 1.71429rem;
			font-weight: 700;
		}

		&:nth-child(2) {
			font-size: 1.14286rem;
			font-weight: 400;
			opacity: 0.7;
		}
	}
`;
