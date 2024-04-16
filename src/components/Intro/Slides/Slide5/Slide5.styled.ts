import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #f9f9f9;
	border-radius: 2.85714rem;
	padding: 5.71rem 4.21rem;
	position: relative;
	overflow: visible;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 2.07rem;

	@media (max-width: 1000px) {
		padding: 2.36rem 1.21rem 1.21rem 1.21rem;
		display: flex;
		flex-direction: column;
		row-gap: 2.14rem;
		border-radius: 0;
		border-bottom-left-radius: 2.85714rem;
		border-bottom-right-radius: 2.85714rem;
	}
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.textSecondary};
	font-size: 4.28571rem;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.08571rem;
	max-width: 49.35714rem;
	width: 100%;

	@media (max-width: 1000px) {
		background: #f9f9f9;
		max-width: 100%;
		font-size: 2.71429rem;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	p {
		margin-top: 1rem;
		color: #909090;
		font-size: 1.42857rem;
		font-weight: 500;
		line-height: 110%;
		letter-spacing: -0.02857rem;
	}

	label {
		margin-top: 1.43rem;
	}
`;

export const Button = styled.button`
	margin-top: 0.86rem;
	border-radius: 1.42857rem;
	background: ${({ theme }) => theme.colors.buttonBgPrimary};
	width: 100%;
	height: 5.78571rem;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1.57143rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.03143rem;
`;
