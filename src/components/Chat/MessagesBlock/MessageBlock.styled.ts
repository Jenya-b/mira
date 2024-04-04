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
	padding: 3rem 0 1.5rem 0;
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

export const ThoughtsWrap = styled.div`
	margin-top: 3.64rem;
	grid-column: 2/3;
	grid-row: 2/3;
	display: flex;
	flex-direction: column;
	row-gap: 3.64rem;

	@media (max-width: 768px) {
		margin-top: 2.43rem;
		row-gap: 1.43rem;
		grid-column: 1/3;
	}
`;
