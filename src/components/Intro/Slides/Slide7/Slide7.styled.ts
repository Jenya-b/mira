import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 1.43rem;
	height: 29.5rem;

	@media (max-width: 1000px) {
		padding: 0rem;
		height: 100%;
		display: block;
	}
`;

export const Block = styled.div`
	border-radius: 2.85714rem;
	padding: 0 4.21rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 2.07rem;

	&:nth-child(1) {
		background: #f9f9f9;

		@media (max-width: 1000px) {
			border-radius: 0;
			border-bottom-left-radius: 2.85714rem;
			border-bottom-right-radius: 2.85714rem;
			padding: 2rem 1.14rem 5.21rem 1.14rem;
		}
	}

	&:nth-child(2) {
		background: #488ce1;

		@media (max-width: 1000px) {
			background: none;
			padding: 4.71rem 1.14rem 1rem 1.14rem;
		}
	}
`;
