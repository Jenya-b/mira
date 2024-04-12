import { Switch, SwitchProps, styled as styledMUI } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 0rem 1.21rem 0rem 1.21rem;
	display: grid;
	grid-template-columns: 1fr minmax(auto, 65rem) 1fr;
	overflow: auto;
`;

export const Container = styled.div`
	padding: 8.64rem 0rem 2rem 0rem;
	height: 100%;
	overflow: auto;
	grid-column: 2/3;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const TitleBlock = styled.div`
	font-size: 3.28571rem;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.06571rem;
	display: flex;
	align-items: center;
	column-gap: 3rem;

	@media (max-width: 768px) {
		text-align: start;
		font-size: 2.14286rem;
	}

	@media (max-width: 480px) {
		justify-content: space-between;
		column-gap: 0.71rem;
	}
`;

export const StyledSwitch = styledMUI((props: SwitchProps) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 80,
	height: 48,
	padding: 0,
	borderRadius: 31,
	[theme.breakpoints.down('sm')]: {
		width: 56,
		height: 31,
	},

	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 4.3,
		transitionDuration: '300ms',
		color: '#D0D3DF',
		border: '1.5px solid #DCDCDC',
		'&.Mui-checked': {
			transform: 'translateX(32px)',
			color: '#ffffff',
			border: '1.5px solid #282B71',
			'& + .MuiSwitch-track': {
				backgroundColor: '#488CE1',
				opacity: 1,
				border: 0,
			},
		},
		[theme.breakpoints.down('sm')]: {
			margin: 3,
			'&.Mui-checked': {
				transform: 'translateX(26px)',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 36,
		height: 36,
		[theme.breakpoints.down('sm')]: {
			width: 22,
			height: 22,
		},
	},
	'& .MuiSwitch-track': {
		backgroundColor: '#7989B1',
		opacity: 1,
	},
}));

export const Controls = styled.div`
	margin-top: 1.22rem;
	display: flex;
	column-gap: 0.57rem;

	button {
		color: ${({ theme }) => theme.colors.textPrimary};
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 120%;
		width: 12.07143rem;
		height: 3.14rem;
		border-radius: 0.85714rem;

		&:nth-child(1) {
			background: ${({ theme }) => theme.colors.buttonBgPrimary};
		}
		&:nth-child(2) {
			border: 1px solid rgba(255, 255, 255, 0.26);
			background: none;
		}
	}

	@media (max-width: 480px) {
		justify-content: space-between;

		button {
			width: 100%;
		}
	}
`;

export const CardsWrap = styled.div`
	margin-top: 4.29rem;

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(28.5rem, 1fr));
	column-gap: 1.43rem;
	row-gap: 0.71rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		margin-top: 2.14rem;
	}
`;
