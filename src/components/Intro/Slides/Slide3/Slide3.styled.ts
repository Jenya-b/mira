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
	background: #488ce1;

	&:nth-child(2) {
		display: block;
		padding: 0;
		img {
			width: 100%;
			height: 100%;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}
	}
`;
