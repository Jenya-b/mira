import styled from 'styled-components';

import logo from '@/assets/images/icons/logo.svg';

export const Wrapper = styled.div`
	padding: 8.64rem 5rem 12rem 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Logo = styled.div`
	width: 6.42857rem;
	height: 6.42857rem;
	background-image: url(${logo});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const Title = styled.h2`
	margin-top: 2.29rem;
	color: #fff;
	font-size: 3.28571rem;
	font-style: normal;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.06571rem;
`;

export const List = styled.ul`
	margin-top: 7rem;
	display: flex;
	justify-content: center;
	gap: 0.63rem;
	flex-wrap: wrap;

	li {
		button {
			padding: 2.25rem 2.52rem;
			border-radius: 0.88229rem;
			border: 0.882px solid rgba(255, 255, 255, 0.5);
			color: #fff;
			background: none;
			font-size: 1.26043rem;
			font-style: normal;
			font-weight: 400;
			line-height: 120%;
		}
	}
`;
