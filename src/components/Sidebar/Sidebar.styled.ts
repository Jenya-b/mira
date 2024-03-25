import styled from 'styled-components';

import bgSidebar from '@/assets/images/bg-sidebar.png';
import logoutIcon from '@/assets/images/icons/logout.svg';
import logoImg from '@/assets/images/logo-full.png';

export const Wrapper = styled.div`
	background-image: url(${bgSidebar});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 2.57rem 2.14rem;
	display: flex;
	flex-direction: column;
`;

export const Logo = styled.div`
	background-image: url(${logoImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	max-width: 10.42rem;
	width: 100%;
	height: 3.28rem;
`;

export const SessionBlock = styled.div`
	margin-top: 2.78rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.93rem;
`;

export const CardBlock = styled.div`
	margin-top: 3.79rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.71rem;
`;

export const MenuBlock = styled.ul`
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	row-gap: 2.86rem;

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
`;

export const ProfileBlock = styled.div`
	margin-top: auto;
	display: flex;
	align-items: center;
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
	background: url(${logoutIcon}) no-repeat;
	background-position: center;
	width: 1.14286rem;
	height: 1.14286rem;
`;
