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
		background: #5970ae;
		border-radius: 1rem;
		height: 3.25157rem;
		max-width: 85%;
		overflow: hidden;
	}
`;

export const Block = styled.div`
	@media (max-width: 768px) {
		height: 100%;
		width: 100%;

		background: linear-gradient(143deg, #5970ae 20%, #7084bf, #5970ae 70%);
		animation-direction: normal;
		animation-duration: 3.2s;
		animation-name: move;
		animation-iteration-count: infinite;
		animation-timing-function: linear;

		@keyframes move {
			from {
				margin-left: -100vw;
			}
			to {
				margin-left: 100vw;
			}
		}
	}
`;
