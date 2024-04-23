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
		position: fixed;
		width: 32.57143rem;
		height: 32.57143rem;
		left: auto;
		right: -2rem;
		top: -11.93rem;
	}
`;

export const Content = styled.div`
	margin-top: 19.5rem;
	margin-right: 9rem;
	width: 19.78571rem;

	@media (max-width: 1000px) {
		max-width: 25rem;
		width: 100%;
		margin-top: 13.5rem;
		margin-right: 3.5rem;
	}

	@media (max-width: 380px) {
		max-width: 22rem;
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
	position: relative;
	color: #fff;
	font-size: 1.28571rem;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: -0.02571rem;

	@media (min-width: 1001px) {
		svg {
			position: absolute;
			top: 50%;
			left: -6rem;
			transform: translateY(-50%);
		}
	}

	@media (max-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr 2.57143rem;
		column-gap: 2.47rem;

		p {
			font-size: 1.14286rem;
		}
	}
`;
