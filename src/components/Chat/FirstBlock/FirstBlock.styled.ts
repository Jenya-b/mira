import styled from 'styled-components';

import logo from '@/assets/images/icons/logo.svg';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr minmax(auto, 65rem) 1fr;
`;

export const Container = styled.div`
	grid-column: 2/3;
	padding: 8.64rem 2rem 12rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 1000px) {
		padding: 10rem 1.43rem 8rem 1.43rem;
	}
`;

export const Logo = styled.div`
	width: 6.42857rem;
	height: 6.42857rem;
	background-image: url(${logo});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const Title = styled.h2`
	margin-top: 2.29rem;
	color: #fff;
	font-size: 3.28571rem;
	font-style: normal;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.06571rem;

	@media (max-width: 1000px) {
		margin-top: 1.79rem;
		font-size: 2.14286rem;
	}
`;

export const List = styled.ul`
	margin-top: 7rem;
	display: flex;
	justify-content: center;
	gap: 0.63rem;
	flex-wrap: wrap;

	li {
		button {
			padding: 1.5rem 1.57rem;
			border-radius: 0.88229rem;
			border: 0.882px solid rgba(255, 255, 255, 0.5);
			color: #fff;
			background: none;
			font-size: 1.26043rem;
			font-style: normal;
			font-weight: 400;
			line-height: 120%;
		}
	}

	@media (max-width: 1000px) {
		margin-top: 3.14rem;

		li {
			font-size: 1.14286rem;
		}
	}
`;
