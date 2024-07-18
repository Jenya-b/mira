import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr minmax(auto, 60rem) 1fr;
	overflow: visible;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
`;

export const Container = styled.div`
	padding: 0 1.43rem;
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: visible;

	@media (max-width: 1000px) {
		grid-column: 1/2;
		overflow-y: hidden;
		padding: 5rem 1.43rem 1.43rem 1.43rem;
	}
`;
