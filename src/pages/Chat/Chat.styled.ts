import styled from 'styled-components';

import arrow from '@/assets/images/icons/arrow-top.svg';
import microphone from '@/assets/images/icons/microphone.svg';

export const Wrapper = styled.div`
	position: relative;
`;

export const Label = styled.label`
	position: absolute;
	left: 50%;
	bottom: 3.29rem;
	transform: translateX(-50%);
	width: 49.64286rem;
	height: 6rem;
	z-index: ${({ theme }) => theme.order.mediumIndex};

	@media (max-width: 1000px) {
		position: fixed;
		left: 0;
		bottom: 0;
		transform: translateX(0);
		width: 100%;
		background: rgba(40, 43, 113, 1);
		border-radius: 2.85714rem 2.85714rem 0rem 0rem;
		height: 5.07143rem;
		padding: 1.21rem 1.5rem 1.07rem 1.5rem;
		display: grid;
		grid-template-columns: 1fr 2.78rem;
		column-gap: 0.79rem;
		align-items: center;
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	border-radius: 6.42857rem;
	background: rgba(40, 43, 113, 0.88);
	color: #fff;
	font-size: 1.28571rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.42857rem;
	padding: 0 10rem 0 2.5rem;

	&::placeholder {
		color: rgba(255, 255, 255, 0.7);
	}

	@media (max-width: 1000px) {
		background: #3a4497;
		padding: 0 0 0 2.5rem;
		font-size: 1rem;
	}
`;

export const ButtonPrimary = styled.button`
	position: absolute;
	top: 50%;
	right: 1.79rem;
	transform: translateY(-50%);
	border-radius: 7.58243rem;
	background: #4eb97f;
	width: 3.28571rem;
	height: 3.28571rem;

	&::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 1.28571rem;
		height: 1.5rem;
		background: url(${arrow}) no-repeat;
	}

	@media (max-width: 1000px) {
		position: relative;
		right: 0rem;
		width: 2.78571rem;
		height: 2.78571rem;

		&::before {
			width: 2;
			height: 2;
		}

		&.microfon::before {
			width: 1.4rem;
			height: 1.76993rem;
			background: url(${microphone}) no-repeat;
		}
	}
`;

export const ButtonSecondary = styled.button`
	position: absolute;
	top: 50%;
	right: 5.86rem;
	transform: translateY(-50%);
	border-radius: 7.58243rem;
	background: none;
	width: 3.28571rem;
	height: 3.28571rem;

	&::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 1.4rem;
		height: 1.76993rem;
		background: url(${microphone}) no-repeat;
	}

	@media (max-width: 1000px) {
		display: none;
	}
`;

export const ChatWrap = styled.div``;
