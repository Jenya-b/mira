import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	bottom: -60rem;
	left: 50%;
	transform: translateX(-50%);
	width: 78.85714rem;
	height: 78.85714rem;
	border-radius: 78.85714rem;
	background: #488ce1;
	z-index: ${({ theme }) => theme.order.lastIndex};
	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		width: 60.57143rem;
		height: 60.57143rem;
		bottom: -42rem;
	}

	@media (max-width: 480px) {
		width: 32.57143rem;
		height: 32.57143rem;
		bottom: -14rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 8rem;

	button {
		width: 100%;
		height: 4.28571rem;
		border-radius: 0.85714rem;
		background: #fff;
		color: #1e1e1e;
		font-size: 1.14286rem;
		font-weight: 500;
		line-height: 120%;

		@media (max-width: 1000px) {
			width: 10.71429rem;
			height: 3.14286rem;
			font-size: 1rem;
			order: 1;
		}
	}
`;

export const TextBlock = styled.div`
	color: #fff;
	order: 2;
	margin-top: 3.21rem;
	font-size: 1.14286rem;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: -0.02571rem;

	p {
		max-width: 23rem;
		width: 100%;

		@media (max-width: 480px) {
			margin-left: -2rem;
		}
	}
`;
