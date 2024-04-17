import styled from 'styled-components';

import bgDesktop from '@/assets/images/bg-desktop-primary.png';
import bgDesktopMob from '@/assets/images/bg-mob-primary.png';

export const Wrapper = styled.div`
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	display: grid;
	grid-template-columns: 19.8rem 1fr;
	background-image: url(${bgDesktop});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 1000px) {
		grid-template: 1fr / 1fr;
	}

	@media (max-width: 420px) {
		background-image: url(${bgDesktopMob});
	}
`;
