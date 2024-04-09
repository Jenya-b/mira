import styled from 'styled-components';

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
