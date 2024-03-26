import styled from 'styled-components';

import bgDesktop from '@/assets/images/bg-desktop-primary.png';
import bgMobile from '@/assets/images/bg-mob-primary.png';
import logoMob from '@/assets/images/chat.png';

export const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	background-image: url(${bgDesktop});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 768px) {
		display: block;
		background-image: url(${bgMobile});
	}
`;

export const Grid = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template: minmax(min-content, 40.28rem) / 1fr repeat(2, minmax(min-content, 45rem)) 1fr;
	column-gap: 1.43rem;

	@media (max-width: 1000px) {
		height: 100%;
		grid-template-columns: 1fr minmax(min-content, 45rem) 1fr;
		column-gap: 0rem;
	}

	@media (max-width: 768px) {
		display: block;
	}
`;

export const Content = styled.div`
	grid-column: 2/3;
	background: #f9f9f9;
	border-radius: 2.85rem;
	padding: 5.2rem 4.29rem 2rem 4.29rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 0.86rem;

	@media (max-width: 768px) {
		overflow-x: hidden;
		position: relative;
		background: none;
		padding: 0;
		border-radius: 0rem;
	}
`;

export const LogoMob = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
		position: absolute;
		width: 12.28571rem;
		height: 11.28571rem;
		top: 0;
		right: -1.5rem;

		background-image: url(${logoMob});
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export const ImageWrap = styled.div`
	grid-column: 3/4;
	background-color: #d7e7de;
	border-radius: 2.85rem;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		height: auto;
		width: 100%;
		max-width: 30rem;
	}

	@media (max-width: 1000px) {
		display: none;
	}
`;

export const Controls = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.85rem;

	@media (max-width: 768px) {
		padding: 0 1.43rem;
	}
`;

export const ButtonSecondary = styled.button`
	width: 100%;
	border-radius: 16px;
	border: 1px solid rgba(30, 30, 30, 0.22);
	height: 4.29rem;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 0.85rem;
	background: none;

	color: #1e1e1e;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
	letter-spacing: -0.41px;

	@media (max-width: 768px) {
		border: 1px solid rgba(255, 255, 255, 0.3);
		color: rgba(255, 255, 255, 1);

		svg {
			path {
				fill: white;
			}
		}
	}

	img {
		width: 24px;
		height: 24px;
	}
`;

export const ControlsInfo = styled.p`
	display: flex;
	justify-content: center;
	text-align: center;
	color: rgba(30, 30, 30, 0.4);
	font-size: 0.85rem;
	font-style: normal;
	font-weight: 500;
	line-height: 0.875rem;
	text-decoration-line: underline;

	@media (max-width: 768px) {
		color: rgba(255, 255, 255, 0.57);
	}

	span {
		display: inline-block;
		max-width: 22.3125rem;
		width: 100%;
	}
`;
