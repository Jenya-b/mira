import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 2.07rem 1.79rem;
	border-radius: 1.71429rem;
	background: ${({ theme }) => theme.colors.bgPrimary};

	@media (max-width: 480px) {
		padding: 1.5rem 1.3rem;
	}
`;

export const Title = styled.h3`
	font-size: 1.71429rem;
	font-weight: 500;
	line-height: 2.85714rem;
	letter-spacing: -0.03429rem;
`;

export const Desc = styled.p`
	margin-top: 0.5rem;
	color: rgba(255, 255, 255, 0.78);
	font-size: 1.14286rem;
	font-weight: 400;
	line-height: 120%;
	max-width: 22rem;
	width: 100%;
`;

export const Controls = styled.div`
	margin-top: 1.57rem;
	display: flex;
	column-gap: 0.6rem;
	align-items: center;
	border-radius: 1rem;
	padding: 1.36rem 1.13rem;
	background: #3b3f8c;
`;

export const Time = styled.input`
	padding-top: 0.2rem;
	font-size: 1.71429rem;
	font-weight: 500;
	line-height: 2.85714rem;
	letter-spacing: -0.03429rem;
	background: none;
	color: ${({ theme }) => theme.colors.textPrimary};
	width: 7.5rem;

	@media (max-width: 768px) {
		width: 6.3rem;
	}

	&::-webkit-calendar-picker-indicator {
		width: 1.5rem;

		filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(162deg)
			brightness(101%) contrast(104%);

		@media (max-width: 768px) {
			width: 0;
			background: none;
		}
	}
`;

export const Periods = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	padding: 0.57rem 0.41rem;
	background: none;
	border-radius: 0.42857rem;
	border: 1px solid rgba(255, 255, 255, 0.26);
	color: ${({ theme }) => theme.colors.textPrimary};
	font-family: 'Onest', sans-serif;
	font-size: 0.85714rem;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	opacity: 0.8;
	margin-left: auto;
	text-align: center;

	option {
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;
