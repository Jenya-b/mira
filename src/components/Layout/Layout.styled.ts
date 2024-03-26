import styled from 'styled-components';

import bgDesktop from '@/assets/images/bg-desktop-primary.png';
import bgSidebar from '@/assets/images/bg-sidebar.png';
import countIcon from '@/assets/images/icons/count.svg';

export const Wrapper = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 19.8rem 1fr;
	background-image: url(${bgDesktop});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 1000px) {
		grid-template: 1fr / 1fr;
	}
`;

export const MobMenu = styled.div`
	display: flex;
	flex-direction: column;
	background-image: url(${bgSidebar});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	top: 0rem;
	left: 0;
	width: 100%;
	border-bottom-left-radius: 2.86rem;
	border-bottom-right-radius: 2.86rem;
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
	background-image: url(${countIcon});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.02286rem;
`;
