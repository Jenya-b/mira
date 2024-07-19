import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 49.6rem 1fr;
	overflow: auto;

	@media (max-width: 768px) {
		padding-top: 6rem;
		display: block;
	}
`;

export const Container = styled.div`
	padding: 5rem 0 1.5rem 0;
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
	row-gap: 3.21rem;
	justify-content: end;
	padding-bottom: 1rem;
	overflow: auto;
	height: max-content;

	@media (max-width: 768px) {
		padding: 1.5rem;
		row-gap: 1.73rem;
	}
`;
