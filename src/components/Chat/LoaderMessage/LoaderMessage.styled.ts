import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 2.6rem 1fr;
	column-gap: 1rem;
`;

export const Logo = styled.div`
	width: 33px;
	height: 33px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Panel = styled.div`
	@media (max-width: 768px) {
		background: rgba(72, 140, 225, 0.4);
		border-radius: 1rem;
		height: 3.25157rem;
		max-width: 85%;
	}
`;
