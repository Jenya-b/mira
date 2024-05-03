import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	left: 50%;
	top: -40rem;
	transform: translateX(-50%);
	width: 85rem;
	height: 85rem;
	border-radius: 78.85714rem;
	background: #488ce1;
	z-index: ${({ theme }) => theme.order.firstIndex};
	display: flex;
	justify-content: end;

	@media (max-width: 768px) {
		top: -45rem;
	}
`;

export const Content = styled.div`
	margin-top: 42rem;
	width: 47rem;
	display: grid;
	grid-template: auto auto / 1fr 13.2rem;
	column-gap: 2.5rem;
	row-gap: 1.5rem;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	@media (max-width: 768px) {
		max-width: 26rem;
		width: 100%;
		margin-right: 35rem;
		grid-template-columns: 1fr;
		margin-top: 47rem;
	}
`;

export const CardWrap = styled.div`
	padding: 1rem;
	position: relative;
`;

export const Button = styled.button`
	width: 13.07143rem;
	height: 4.28571rem;
	border-radius: 0.85714rem;
	background: #fff;
	color: #1e1e1e;
	font-size: 1.14286rem;
	font-weight: 500;
	line-height: 120%;
	grid-column: 2/3;
	grid-row: 1/2;

	@media (max-width: 1000px) {
		width: 10.71429rem;
		height: 3.14286rem;
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		grid-column: 1/2;
		grid-row: 3/4;
		justify-self: center;
	}
`;

export const TextBlock = styled.div`
	position: relative;
	color: #fff;
	font-size: 1.28571rem;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: -0.02571rem;
	padding: 0 1rem;

	@media (max-width: 768px) {
		font-size: 1.14286rem;
	}
`;
