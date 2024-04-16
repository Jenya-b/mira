import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 1.43rem;
	height: 40.28571rem;
	overflow: hidden;

	@media (max-width: 1000px) {
		display: grid;
		grid-template: auto 1fr 8rem / 1fr;
		background: #f9f9f9;
		height: 100vh;
	}
`;

export const Block = styled.div`
	border-radius: 2.85714rem;
	padding: 3.93rem;

	&:nth-child(1) {
		background: #f9f9f9;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
		column-gap: 2.1rem;
		row-gap: 1.43rem;
		overflow: auto;

		@media (max-width: 1000px) {
			padding: 1.21rem 1.14rem 1rem 1.14rem;
			grid-row: 2/3;
			grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
			gap: 1.43rem;
			border-radius: 0rem;
		}

		button {
			width: 100%;
			border-radius: 1.46893rem;
			opacity: 0.7;
			background: #488ce1;
			height: 8.92rem;
			color: #fff;
			font-size: 1.67879rem;
			font-weight: 400;
			line-height: 1.78371rem;
			letter-spacing: -0.03357rem;
			padding: 1.78rem 1.89rem;
			display: flex;
			text-align: start;

			@media (max-width: 1000px) {
				font-size: 1.14286rem;
				line-height: 1.21429rem;
				letter-spacing: -0.02286rem;
				height: 6.07rem;
				padding: 1.21rem 1.29rem;
			}

			&.active {
				opacity: 1;
			}
		}
	}

	&:nth-child(2) {
		background: #d7e7de;
		display: flex;
		flex-direction: column;
		justify-content: center;
		row-gap: 2.07rem;

		@media (max-width: 1000px) {
			background: none;
			padding: 2rem 1.14rem 1rem 1.14rem;
			grid-row: 1/2;
		}
	}
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.textSecondary};
	font-size: 4.28571rem;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.08571rem;
	max-width: 49.35714rem;
	width: 100%;

	@media (max-width: 1000px) {
		font-size: 2.14286rem;
		font-weight: 500;
		line-height: 2.85714rem;
		letter-spacing: -0.04286rem;
	}
`;

export const Subtitle = styled.h3`
	color: #909090;
	font-size: 1.42857rem;
	font-weight: 500;
	letter-spacing: -0.02857rem;
	max-width: 30.85714rem;
	width: 100%;

	@media (max-width: 1000px) {
		font-size: 1.14286rem;
		font-weight: 500;
		line-height: 1.28571rem;
		letter-spacing: -0.02286rem;
	}
`;
