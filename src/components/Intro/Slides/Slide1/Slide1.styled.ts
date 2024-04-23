import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #f9f9f9;
	border-radius: 2.85714rem;
	height: 29.5rem;
	padding: 0rem 4.21rem;
	position: relative;
	overflow: visible;
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 2.07rem;

	@media (max-width: 1000px) {
		padding: 0rem;
		background: none;
		height: 100%;
		display: block;
	}
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.textSecondary};
	font-size: 4.28571rem;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.08571rem;
	max-width: 49.35714rem;
	width: 100%;

	@media (max-width: 1000px) {
		background: #f9f9f9;
		max-width: 100%;
		height: 20rem;
		padding: 2.36rem 1.14rem;
		font-size: 2.85714rem;
		border-bottom-left-radius: 2.85714rem;
		border-bottom-right-radius: 2.85714rem;
	}
`;

export const ImagesWrap = styled.div`
	position: absolute;
	top: 50%;
	right: 3.33rem;
	transform: translateY(-50%);
	width: 40rem;
	height: 40rem;

	@media (max-width: 1000px) {
		width: 22rem;
		height: 26rem;
		left: 50%;
		top: 10rem;
		transform: translateX(-50%);
	}

	img {
		&:nth-child(1) {
			position: absolute;
			top: 0;
		}
		&:nth-child(2) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		@media (max-width: 1000px) {
			width: 17.14286rem;
			height: 17.14286rem;
		}
	}
`;
