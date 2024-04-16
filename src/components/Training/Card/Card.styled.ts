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
`;

export const Content = styled.div`
	margin-top: 30rem;
	margin-right: 6rem;
	width: 22.85714rem;

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
	}
`;

export const TextBlock = styled.div`
	position: relative;
	color: #fff;
	font-size: 1.28571rem;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: -0.02571rem;

	ul {
		li {
			position: relative;
			padding-left: 2rem;

			&::before {
				position: absolute;
				content: '';
				width: 4px;
				height: 4px;
				background: #fff;
				top: 50%;
				left: 1rem;
				transform: translateY(-50%);
				border-radius: 50%;
			}
		}
	}

	svg {
		position: absolute;
		top: 50%;
		left: -6rem;
		transform: translateY(-50%);
	}
`;
