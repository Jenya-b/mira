import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;

	&.grid {
		display: grid;
		grid-template: 1fr 9.29rem / 1fr;

		@media (max-width: 1000px) {
			grid-template: 1fr 5.07143rem / 1fr;
		}
	}
`;

export const ChatWrap = styled.div`
	height: 100%;
`;
