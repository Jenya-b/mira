import styled, { css } from 'styled-components';

import coverImg from '@/assets/images/cardsSlider/1.png';

import 'swiper/css';
import 'swiper/css/pagination';

export const Wrapper = styled.div`
	grid-column: 1/3;
	overflow: hidden;
`;

export const ControlsWrap = styled.div`
	margin-top: 1.07rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.71rem;
	max-width: 25.21429rem;
	width: 100%;

	@media (max-width: 480px) {
		max-width: 100%;
	}
`;

const buttonCss = css`
	width: 100%;
	height: 5.78571rem;
	color: #fff;
	font-size: 1.57143rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.03143rem;
`;

export const ButtonSecondary = styled.button`
	${buttonCss}
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 0.71rem;
	border-radius: 1.42857rem;
	border: 1px solid #fff;
	background: none;
`;

export const Cover = styled.div`
	background: url(${coverImg}) no-repeat;
	border-radius: 1.42857rem;
	width: 100%;
	height: 100%;
	padding: 0.64rem 0.79rem 6rem 0.79rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .warning {
		border-radius: 0.9405rem;
		background: rgba(255, 255, 255, 0.18);
		backdrop-filter: blur(5px);
		display: flex;
		align-items: center;
		column-gap: 1.36rem;
		height: 3.76207rem;
		padding: 0 0.71rem;

		&__icon {
			background: #ffffff;
			border-radius: 50%;
			width: 1.85714rem;
			height: 1.85714rem;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #8687af;
			font-size: 1.28571rem;
			font-weight: 500;
			line-height: 120%;
		}

		&__text {
			font-size: 1rem;
			font-weight: 500;
			line-height: 120%;
		}
	}

	& .title {
		text-align: center;
		font-size: 2.14286rem;
		font-weight: 500;
		line-height: 2.57143rem;
		letter-spacing: -0.04286rem;
		max-width: 25rem;
		width: 100%;
	}
`;

export const InstructionCover = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.14286rem;
	font-weight: 500;
	line-height: 2.57143rem;
	letter-spacing: -0.04286rem;
	border-radius: 1.42857rem;
	background: rgba(41, 44, 114, 0.8);
	text-align: center;
	padding: 0 1rem;
`;
