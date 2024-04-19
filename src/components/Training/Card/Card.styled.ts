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
		left: 50%;
		top: -11.93rem;
		transform: translateX(-50%);
	}
`;

export const Content = styled.div`
	margin-top: 30rem;
	margin-right: 6rem;
	width: 22.85714rem;

	@media (max-width: 1000px) {
		width: 100%;
		margin-top: 13.5rem;
		margin-right: 0rem;
		margin-left: 5rem;

		img {
			margin-left: 3.36rem;
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
	position: relative;
	color: #fff;
	font-size: 1.28571rem;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: -0.02571rem;

	@media (max-width: 1000px) {
		svg {
			display: none;
		}
		margin-top: 2.29rem;
		font-size: 1.14286rem;
	}

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

			@media (max-width: 1000px) {
				&:nth-child(1) {
					&::before {
						content: '1.';
						background: none;
						top: 0;
						left: 0.5rem;
						transform: translateY(0);
					}
				}
				&:nth-child(2) {
					&::before {
						content: '2.';
						background: none;
						top: 0;
						left: 0.5rem;
						transform: translateY(0);
					}
				}
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

export const ButtonGroup = styled.div`
	margin-left: 3rem;
	display: flex;
	align-items: center;
	column-gap: 0.57rem;
`;

export const ButtonSecondary = styled.div`
	background: none;
	width: 7.85714rem;
	height: 2.5rem;
	border-radius: 6.42857rem;
	border: 1px solid rgba(255, 255, 255, 0.17);
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 0.85714rem;
	font-weight: 500;
	letter-spacing: -0.02rem;

	p {
		padding-left: 0.29rem;
	}

	img {
		margin-left: 0;
		width: 1rem;
		height: 1rem;
	}
`;
