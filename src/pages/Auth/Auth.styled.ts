import styled from 'styled-components';

import bgDesktop from '@/assets/images/bg-desktop-primary.png';

export const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	background-image: url(${bgDesktop});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
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
`;

export const Content = styled.div`
	grid-column: 2/3;
	background: #f9f9f9;
	border-radius: 2.85rem;

	padding: 0 4.64rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 0.86rem;
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
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 500;
	line-height: 0.875rem;
	text-decoration-line: underline;

	span {
		display: inline-block;
		max-width: 22.3125rem;
		width: 100%;
	}
`;
