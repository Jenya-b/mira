import styled from 'styled-components';

import { ButtonPrimary } from '@/styles/components';

export const Wrapper = styled.div`
	padding: 8.64rem 1.21rem 2rem 1.21rem;
	display: grid;
	grid-template-columns: 1fr minmax(auto, 71.21429rem) 1fr;
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

export const AccordionWrap = styled.div`
	margin-top: 4.63rem;
	display: flex;
	flex-direction: column;
	row-gap: 1.43rem;

	@media (max-width: 768px) {
		margin-top: 2.14rem;
		row-gap: 0.71rem;
	}
`;

export const Controls = styled.div`
	margin-top: 1.29rem;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 768px) {
		margin: 0.71rem 0 0 0;
	}
`;

export const Button = styled(ButtonPrimary)`
	width: 24.28571rem;

	@media (max-width: 768px) {
		width: 100%;
	}
`;
