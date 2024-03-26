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
	max-width: 49.64286rem;
	width: 100%;
	height: 6rem;
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	border-radius: 6.42857rem;
	background: rgba(40, 43, 113, 0.88);
	backdrop-filter: blur(5px);
	color: #fff;
	font-size: 1.28571rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.42857rem;
	padding: 0 10rem 0 2.5rem;
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
`;

export const ChatWrap = styled.div``;
