import styled from 'styled-components';

import { Colors } from '@/styles/colors';

export const Wrapper = styled.div`
	padding: 0rem 1.21rem 0rem 1.21rem;
	display: grid;
	grid-template-columns: 1fr minmax(auto, 63rem) 1fr;
	overflow: auto;
`;

export const Container = styled.div`
	padding: 2.64rem 0rem 2rem 0rem;
	height: 100%;
	grid-column: 2/3;
	height: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 2.29rem;

	@media (max-width: 1000px) {
		padding-top: 7rem;
	}

	@media (max-width: 480px) {
		row-gap: 0.71rem;
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template: repeat(3, 17rem) / repeat(2, 1fr);
	gap: 1.43rem;

	@media (max-width: 768px) {
		grid-template: auto / 1fr;
	}

	@media (max-width: 480px) {
		row-gap: 0.71rem;
	}
`;

export const Card = styled.div`
	padding: 1.79rem;
	border-radius: 1.71429rem;
	background: ${({ theme }) => theme.colors.bgPrimary};
	position: relative;
	display: flex;
	flex-direction: column;

	&:nth-child(3) {
		grid-row: 2/4;
		border: 1px solid #fcb5ad;

		@media (max-width: 768px) {
			grid-row: 3/4;
		}
	}

	&.exception {
		background: ${({ theme }) => theme.colors.bgTertiary};
	}
`;

export const Title = styled.h2`
	margin-bottom: 0.8rem;
	font-size: 1.71429rem;
	font-weight: 500;
	line-height: 120%;
	letter-spacing: -0.03429rem;
`;

export const Subtitle = styled.h3`
	font-size: 1.14286rem;
	font-weight: 400;
	line-height: 120%;
	opacity: 0.78;

	span {
		display: inline-block;
		max-width: 16.5rem;
		width: 100%;
	}
`;

export const SessionInfo = styled.p`
	margin-top: auto;
	font-size: 1rem;
	font-weight: 500;
	line-height: 120%;
	background: ${Colors.BLUE_300};
	border-radius: 1rem;
	padding: 1.5rem 0.43rem;
	text-align: center;

	@media (max-width: 768px) {
		margin-top: 3.36rem;
	}
`;

export const SessionCount = styled.div`
	position: absolute;
	top: 2.07rem;
	right: 1.79rem;
	width: 4.57143rem;
	height: 4.57143rem;
	border-radius: 50%;
	border: 1px solid #488ce1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.20071rem;
	font-weight: 500;
	line-height: 1.10036rem;
	letter-spacing: -0.044rem;
`;

export const ParamsWrap = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	row-gap: 4rem;

	&.exception {
		position: relative;

		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			width: 100%;
			height: 0.07143rem;
			background: rgba(255, 255, 255, 0.18);
		}
	}
`;
