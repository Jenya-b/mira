import styled from 'styled-components';

import bgDesktop from '@/assets/images/bg-desktop-primary.png';

export const Wrapper = styled.div`
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	display: grid;
	grid-template-columns: 1fr minmax(auto, 91.42857rem) 1fr;
	align-items: center;
	background-image: url(${bgDesktop});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: visible;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
		align-items: start;
	}
`;

export const SliderWrap = styled.div`
	grid-column: 2/3;
	overflow: visible;
	min-width: 0;
	width: 100%;

	@media (max-width: 1000px) {
		grid-column: 1/3;
		height: 100%;
	}
`;
