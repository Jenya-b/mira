import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 1.43rem;
	height: 29.5rem;
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
	}

	&:nth-child(2) {
		background: #488ce1;
	}
`;
