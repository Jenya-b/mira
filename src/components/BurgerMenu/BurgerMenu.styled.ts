import { Link } from 'react-router-dom';
import styled from 'styled-components';

import bgSidebar from '@/assets/images/bg-sidebar.png';

export const Wrapper = styled.div`
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

export const Menu = styled.div`
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

export const BackLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.29rem;
	width: 16.5rem;
	height: 2.5rem;
	border-radius: 6.42857rem;
	border: 1px solid rgba(255, 255, 255, 0.17);
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 0.85714rem;
	font-weight: 500;
	letter-spacing: -0.01714rem;
`;

export const Filter = styled.button`
	border-radius: 6.42857rem;
	border: 1px solid rgba(255, 255, 255, 0.17);
	background: none;
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	&.active {
		border: 1px solid #4eb97f;
	}
`;
