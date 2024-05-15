import styled, { css } from 'styled-components';

import bgDesktop from '@/assets/images/bg-desktop-primary.png';

const wrapCss = css`
	padding: 1rem;
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	background-image: url(${bgDesktop});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const NotFoundWrap = styled.div`
	${wrapCss}

	h1 {
		font-size: 2.57143rem;
		font-weight: 400;
		line-height: 120%;

		@media (max-width: 768px) {
			font-size: 1.42857rem;
			line-height: 1.85714rem;
			letter-spacing: -0.02857rem;
			max-width: 16.71rem;
			width: 100%;
		}
	}

	h2 {
		margin-top: 3rem;
		font-size: 1.42857rem;
		font-weight: 400;
		line-height: 120%;

		@media (max-width: 768px) {
			margin-top: 2rem;
			font-size: 1.14286rem;
			line-height: 1.42857rem;
			letter-spacing: -0.02286rem;
			max-width: 18.8rem;
			width: 100%;
		}
	}

	button {
		margin-top: 4rem;
		max-width: 25rem;

		@media (max-width: 768px) {
			margin-top: 3rem;
		}
	}
`;

export const ErrorType = styled.div`
	font-size: 21.42857rem;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.42857rem;
	display: flex;

	p:nth-child(2) {
		padding-top: 1.97rem;
		transform: rotate(16.069deg);
	}

	@media (max-width: 768px) {
		font-size: 10rem;
		font-weight: 500;
		letter-spacing: -0.2rem;
	}
`;

export const OtherErrorWrap = styled.div`
	${wrapCss}
	row-gap: 2.64rem;

	@media (max-width: 768px) {
		row-gap: 2.2rem;
	}

	h1 {
		font-size: 2.14286rem;
		font-weight: 500;
		line-height: 110%;
		letter-spacing: -0.04286rem;

		@media (max-width: 768px) {
			line-height: 2.57143rem;
			letter-spacing: -0.04286rem;
			max-width: 25.42857rem;
			width: 100%;
		}
	}

	h2 {
		font-size: 1.42857rem;
		font-weight: 400;
		line-height: 120%;

		@media (max-width: 768px) {
			font-size: 1.14286rem;
			line-height: 1.42857rem; /* 125% */
			letter-spacing: -0.02286rem;
			max-width: 21.5rem;
			width: 100%;
		}
	}

	button {
		max-width: 25rem;

		@media (max-width: 768px) {
		}
	}
`;
