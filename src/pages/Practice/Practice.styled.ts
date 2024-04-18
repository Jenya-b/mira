import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 0rem 1.21rem 0rem 1.21rem;
	display: grid;
	grid-template-columns: 1fr minmax(auto, 63rem) 1fr;
	overflow: auto;
	position: relative;
`;

export const Container = styled.div`
	padding: 2.64rem 0rem 2rem 0rem;
	height: 100%;
	overflow: auto;
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
	row-gap: 2.29rem;

	@media (max-width: 1000px) {
		padding-top: 7rem;
	}

	@media (max-width: 480px) {
		row-gap: 0.71rem;
	}
`;

export const Controls = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 480px) {
		display: none;
	}
`;

export const Filter = styled.button`
	border-radius: 6.42857rem;
	border: 1px solid rgba(255, 255, 255, 0.17);
	width: 15.35714rem;
	height: 3.57143rem;
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: -0.02rem;
	color: ${({ theme }) => theme.colors.textPrimary};
	background: none;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 0.29rem;

	&.training {
		position: relative;
		z-index: ${({ theme }) => theme.order.mainIndex};
	}

	&.active {
		border: 1px solid #4eb97f;
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.43rem;

	@media (max-width: 768px) {
		grid-template: auto / 1fr;
	}

	@media (max-width: 480px) {
		row-gap: 0.71rem;
	}
`;

export const DisabledBg = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: ${({ theme }) => theme.order.firstIndex};
	overflow: hidden;
`;

export const FilterBg = styled.div`
	background: rgba(0, 0, 0, 0.35);
	backdrop-filter: blur(5px);
	position: absolute;
	width: 100%;
	height: 100%;
`;
