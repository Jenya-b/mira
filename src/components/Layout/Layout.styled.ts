import styled from 'styled-components';

import bgDesktop from '@/assets/images/bg-desktop-primary.png';

export const Wrapper = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 19.8rem 1fr;
	background-image: url(${bgDesktop});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
