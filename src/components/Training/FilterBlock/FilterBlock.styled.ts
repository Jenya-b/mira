import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	left: 50%;
	top: -60rem;
	transform: translateX(-50%);
	width: 85rem;
	height: 85rem;
	border-radius: 78.85714rem;
	background: #488ce1;
	z-index: ${({ theme }) => theme.order.firstIndex};
	display: flex;
	justify-content: end;

	@media (max-width: 480px) {
		width: 32.57143rem;
		height: 32.57143rem;
		top: -11.93rem;
		left: auto;
		transform: translateX(0);
		right: -1rem;
	}
`;

export const Content = styled.div`
	margin-top: 63rem;
	margin-right: 35rem;
	width: 31.14286rem;

	@media (max-width: 1000px) {
		max-width: 24rem;
		width: 100%;
		margin-right: 35rem;
	}

	@media (max-width: 480px) {
		max-width: 20rem;
		width: 100%;
		margin-top: 14rem;
		margin-right: 5rem;
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

	@media (max-width: 480px) {
		font-size: 1.14286rem;
		display: grid;
		grid-template-columns: 1fr 10px;
	}
`;

export const StyledFilter = styled.div`
	border-radius: 6.42857rem;
	border: 1px solid rgba(255, 255, 255, 0.17);
	background: none;
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: ${({ theme }) => theme.order.mainIndex};
	display: none;

	@media (max-width: 480px) {
		display: flex;
	}
`;
