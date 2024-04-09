import styled from 'styled-components';

import { ButtonPrimary } from '@/styles/components';

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
