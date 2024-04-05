import styled, { css } from 'styled-components';

import 'swiper/css';
import 'swiper/css/pagination';

export const Wrapper = styled.div`
	grid-column: 1/3;
	overflow: hidden;
`;

export const Controls = styled.div`
	margin-top: 1.07rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.71rem;
	max-width: 25.21429rem;
	width: 100%;
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

export const ButtonPrimary = styled.button`
	${buttonCss}
	border-radius: 1.42857rem;
	background: #4eb97f;
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
