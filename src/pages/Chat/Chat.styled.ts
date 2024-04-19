import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	overflow-y: hidden;

	@media (min-width: 1000px) {
		height: 100vh;
	}

	&.grid {
		display: grid;
		grid-template: 1fr 9.29rem / 1fr;

		@media (max-width: 1000px) {
			grid-template: 1fr 5.07143rem / 1fr;
		}

		@media (max-width: 768px) {
			grid-template: 1fr 6.1rem / 1fr;
		}
	}
`;
