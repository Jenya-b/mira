import styled from 'styled-components';

import bgDesktop from '@/assets/images/bg-desktop-primary.png';
import bgDesktopMob from '@/assets/images/bg-mob-primary.png';
import bgSidebar from '@/assets/images/bg-sidebar.png';

export const Wrapper = styled.div`
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	display: grid;
	grid-template-columns: 19.8rem 1fr;
	background-image: url(${bgDesktop});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 1000px) {
		grid-template: 1fr / 1fr;
	}

	@media (max-width: 420px) {
		background-image: url(${bgDesktopMob});
	}
`;

export const MobMenu = styled.div`
	display: flex;
	flex-direction: column;
	background: rgba(40, 43, 113, 1);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: fixed;
	top: 0rem;
	left: 0;
	width: 100%;
	border-bottom-left-radius: 2.86rem;
	border-bottom-right-radius: 2.86rem;
	z-index: ${({ theme }) => theme.order.firstIndex};

	&.active {
		background-image: url(${bgSidebar});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export const MobMenuWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.43rem;
`;

export const BurgerBtn = styled.button`
	background: rgba(78, 185, 127, 1);
	width: 2.85714rem;
	height: 2.85714rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		display: inline-block;
		position: relative;
		width: 1.29593rem;
		height: 0.5rem;

		&::after,
		&::before {
			content: '';
			position: absolute;
			width: 1.29593rem;
			height: 0.14286rem;
			background: #fff;
			left: 0;
			transition: all 0.1s;
		}

		&::after {
			transform: rotate(0deg);
			bottom: 0rem;
		}
		&::before {
			transform: rotate(0deg);
			top: 0rem;
		}

		&.active {
			&::after {
				transform: rotate(45deg);
				bottom: 0.2rem;
			}

			&::before {
				transform: rotate(-45deg);
				top: 0.2rem;
			}
		}
	}
`;

export const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.57rem;
`;

export const CountSession = styled.div`
	width: 2.57143rem;
	height: 2.57143rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.02286rem;
	position: relative;

	svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;
