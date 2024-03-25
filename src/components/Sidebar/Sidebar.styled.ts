import styled from 'styled-components';

import bgSidebar from '@/assets/images/bg-sidebar.png';
import logoImg from '@/assets/images/logo-full.png';

export const Wrapper = styled.div`
	background-image: url(${bgSidebar});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 2.57rem 2.14rem;
	display: flex;
	flex-direction: column;

	@media (max-height: 800px) and (min-width: 1001px) {
		justify-content: space-between;
	}

	@media (max-width: 1000px) {
		background-image: none;
		padding: 0rem 1.43rem 1.57rem 1.43rem;
	}
`;

export const Logo = styled.div`
	background-image: url(${logoImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	max-width: 10.42rem;
	width: 100%;
	height: 3.28rem;

	@media (max-width: 1000px) {
		display: none;
	}
`;

export const SessionBlock = styled.div`
	margin-top: 2.78rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.93rem;

	@media (max-height: 800px) and (min-width: 1001px) {
		margin-top: 0rem;
	}

	@media (max-width: 1000px) {
		margin-top: 0.5rem;
	}
`;

export const CardBlock = styled.div`
	margin-top: 3.79rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.71rem;

	@media (max-height: 800px) and (min-width: 1001px) {
		margin-top: 0rem;
	}

	@media (max-width: 1000px) {
		display: none;
	}
`;

export const MenuBlock = styled.ul`
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	row-gap: 2.86rem;

	@media (max-height: 800px) and (min-width: 1001px) {
		margin-top: 0rem;
	}

	@media (max-width: 1000px) {
		margin-top: 3.93rem;
		row-gap: 3.57rem;
	}

	li {
		color: #fff;
		font-size: 1.14286rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.02286rem;
	}
`;

export const ButtonPrimory = styled.button`
	padding-bottom: 1.36rem;
	width: 100%;
	border-bottom: 1px solid rgba(255, 255, 255, 0.26);
	background: none;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -0.02286rem;

	p {
		padding-left: 1.04rem;
	}
`;

export const ButtonSecondary = styled.button`
	background: none;
	width: 100%;
	height: 3.57143rem;
	border-radius: 6.42857rem;
	border: 1px solid rgba(255, 255, 255, 0.17);
	display: flex;
	justify-content: center;
	align-items: center;

	color: #fff;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.02rem;

	p {
		padding-left: 0.29rem;
	}

	img {
		width: 1rem;
		height: 1rem;
	}

	@media (max-width: 1000px) {
		width: 7.85714rem;
		height: 2.5rem;
		font-size: 0.85714rem;
	}
`;

export const ProfileBlock = styled.div`
	margin-top: auto;
	display: flex;
	align-items: center;

	@media (max-height: 800px) and (min-width: 1001px) {
		margin-top: 0rem;
	}

	@media (max-width: 1000px) {
		margin-top: 3.43rem;
	}
`;

export const UserName = styled.p`
	margin-left: 1.07rem;
	color: #fff;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.02rem;
`;

export const LogoutBtn = styled.button`
	margin-left: auto;
	background: none;

	p {
		display: none;
		color: #fff;
		font-size: 1.14286rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.02286rem;
	}

	@media (max-width: 1000px) {
		display: flex;
		align-items: center;
		column-gap: 0.57rem;

		p {
			display: block;
		}
	}
`;
