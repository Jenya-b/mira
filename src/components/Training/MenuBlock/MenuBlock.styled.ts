import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	left: -42rem;
	top: -10rem;
	width: 78.85714rem;
	height: 78.85714rem;
	border-radius: 78.85714rem;
	background: #488ce1;
	z-index: ${({ theme }) => theme.order.firstIndex};
	display: flex;
	justify-content: end;

	@media (max-width: 1000px) {
		width: 32.57143rem;
		height: 32.57143rem;
		left: -6.93rem;
		top: -11.93rem;
	}
`;

export const Content = styled.div`
	margin-top: 13rem;
	margin-right: 14rem;
	width: 19.78571rem;

	svg {
		display: none;
	}

	@media (max-width: 1000px) {
		margin-top: 14rem;
		margin-right: 5rem;

		svg {
			display: block;
		}
	}

	button {
		margin-top: 1.43rem;
		width: 13.07143rem;
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
		}
	}
`;

export const TextBlock = styled.div`
	color: #fff;
	font-size: 1.28571rem;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: -0.02571rem;

	@media (max-width: 1000px) {
		margin-top: 2rem;
		font-size: 1.14286rem;
	}
`;
