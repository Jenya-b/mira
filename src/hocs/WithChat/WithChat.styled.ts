import { animated } from '@react-spring/web';
import styled from 'styled-components';

import logo from '@/assets/images/logo.png';

export const Wrapper = styled(animated.div)`
	height: 100%;
	display: grid;
	grid-template-columns: 1fr minmax(auto, 65rem) 1fr;
	overflow: auto;
`;

export const Container = styled.div`
	grid-column: 2/3;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 1000px) {
		padding: 7rem 1.43rem 1.43rem 1.43rem;
	}
`;

export const Logo = styled.div`
	width: 6.42857rem;
	height: 6.42857rem;
	background-image: url(${logo});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;

	@media (max-width: 420px) {
		width: 4rem;
		height: 4rem;
	}
`;

export const Title = styled.h2`
	margin-top: 2.29rem;
	color: #fff;
	font-size: 3.28571rem;
	font-style: normal;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.06571rem;
	max-width: 42.78571rem;
	width: 100%;
	text-align: center;

	@media (max-width: 1000px) {
		margin-top: 1.79rem;
		font-size: 2.14286rem;
	}

	@media (max-width: 420px) {
		margin-top: 1rem;
		font-size: 1.8rem;
	}
`;
