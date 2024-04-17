import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 49.6rem 1fr;
	overflow: hidden;
	height: 100vh;

	@media (max-width: 768px) {
		padding-top: 6rem;
		display: block;
	}
`;

export const Container = styled.div`
	padding: 3rem 0 1.5rem 0;
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
	justify-content: end;
	padding-bottom: 1rem;
	height: 100vh;

	@media (max-width: 768px) {
		padding: 1.5rem;
		row-gap: 1.73rem;
	}
`;

export const MessageWrap = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 3.21rem;
	margin-bottom: auto;
`;

export const DisabledBg = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: ${({ theme }) => theme.order.firstIndex};
`;

export const FilterBg = styled.div`
	background: rgba(0, 0, 0, 0.35);
	backdrop-filter: blur(5px);
	position: absolute;
	width: 100%;
	height: 100%;

	&.menu,
	&.session,
	&.card {
		left: 19.8rem;

		@media (max-width: 1000px) {
			left: 0rem;
		}
	}
`;
