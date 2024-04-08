import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 1.64rem 1.86rem 0rem 1.86rem;
	height: max-content;
	border-radius: 1.42857rem;
	background: #2d327e;
	overflow: hidden;
	display: grid;
	grid-template-columns: 2.5rem 1fr;
	column-gap: 1.93rem;

	@media (max-width: 768px) {
		column-gap: 1.07rem;
	}

	&.open {
		background: #fff;
		color: #000;
		transition: background 0.1s linear;

		svg {
			rotate: 45deg;
		}
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	grid-column: 2/3;
	grid-row: 1/2;
	font-size: 1.71429rem;
	font-weight: 500;

	@media (max-width: 768px) {
		font-size: 1.28571rem;
		line-height: 110%;
	}
`;

export const Desc = styled.p`
	grid-column: 2/3;
	grid-row: 2/3;
	max-height: 0;
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 400;
	line-height: 120%;
	max-width: 38.21429rem;
	width: 100%;
	opacity: 0;
	padding: 0.82rem 0;

	@media (max-width: 768px) {
		font-size: 1rem;
	}

	&.open {
		max-height: 500px;
		opacity: 1;
		transition: max-height 1s linear;
	}
`;
