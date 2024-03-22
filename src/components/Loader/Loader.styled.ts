import { LinearProgress, linearProgressClasses } from '@mui/material';
import { styled as styledMUI } from '@mui/material/styles';
import styled from 'styled-components';

import loaderImg from '@/assets/images/bg-loader.png';
import logoImg from '@/assets/images/logo-full.png';

export const LoaderWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: end;
	z-index: 100;
	background-image: url(${loaderImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Logo = styled.div`
	background-image: url(${logoImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	max-width: 33.07043rem;
	width: 100%;
	height: 10.42857rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (max-width: 768px) {
		max-width: 18rem;
	}
`;

export const StyledLinearProgress = styledMUI(LinearProgress)(() => ({
	height: '1.5rem',
	borderRadius: 5,
	[`&.${linearProgressClasses.root}`]: {
		backgroundColor: 'rgba(167, 202, 237, 0)',
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: '#4EB97F',
		height: '1.5rem',
	},
}));

export const Line = styled.div`
	position: absolute;
	width: 100%;
	height: 0.71429rem;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	border-radius: 6.42857rem;
	background: #f9f9f9;
`;
