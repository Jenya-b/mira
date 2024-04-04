import styled from 'styled-components';

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
