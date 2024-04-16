import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	bottom: -52rem;
	left: 50%;
	transform: translateX(-50%);
	width: 78.85714rem;
	height: 78.85714rem;
	border-radius: 78.85714rem;
	background: #488ce1;
	z-index: ${({ theme }) => theme.order.lastIndex};
	display: flex;
	justify-content: center;

	@media (max-width: 1000px) {
		z-index: ${({ theme }) => theme.order.firstIndex};
	}
`;

export const Content = styled.div`
	margin-top: 13rem;
	width: 50rem;
	height: 5rem;
	display: grid;
	grid-template-columns: 1fr 13rem;

	button {
		width: 100%;
		height: 4.28571rem;
		border-radius: 0.85714rem;
		background: #fff;
		color: #1e1e1e;
		font-size: 1.14286rem;
		font-weight: 500;
		line-height: 120%;
	}
`;

export const TextBlock = styled.div`
	color: #fff;
	font-size: 1.28571rem;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: -0.02571rem;
`;
