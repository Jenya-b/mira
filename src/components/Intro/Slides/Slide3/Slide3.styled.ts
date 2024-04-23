import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 1.43rem;
	height: 29.5rem;

	@media (max-width: 1000px) {
		height: 100%;
		grid-template: max-content 1fr / 1fr;
	}

	@media (max-width: 480px) {
		overflow: hidden;
	}
`;

export const Block = styled.div`
	border-radius: 2.85714rem;
	padding: 0 4.21rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 2.07rem;
	background: #488ce1;

	&:nth-child(1) {
		@media (max-width: 1000px) {
			background: none;
			padding: 2rem 1.14rem 5.21rem 1.14rem;
		}

		@media (max-width: 480px) {
			padding: 5rem 1.14rem 5rem 1.14rem;
		}
	}

	&:nth-child(2) {
		display: block;
		padding: 0;
		img {
			width: 100%;
			height: 100%;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;

			@media (max-width: 480px) {
				height: 110%;
			}
		}

		@media (max-width: 1000px) {
			background: none;
			margin-left: auto;
			margin-right: auto;
			max-width: 40rem;
			width: 100%;

			img {
				text-align: center;
				object-fit: cover;
				border-top-right-radius: 2.86rem;
				border-top-left-radius: 2.86rem;
			}
		}
	}
`;
