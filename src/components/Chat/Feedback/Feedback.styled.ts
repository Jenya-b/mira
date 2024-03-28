import styled from 'styled-components';

export const List = styled.ul`
	margin-top: 3.29rem;
	display: flex;
	column-gap: 1.43rem;
	justify-content: center;

	@media (max-width: 1000px) {
		column-gap: 1.36rem;
	}

	li {
		width: 10.35714rem;
		height: 10.35714rem;
		border-radius: 0.99714rem;
		border: 0.997px solid;

		&:nth-child(1) {
			border-color: rgba(248, 170, 160, 0.67);

			button {
				color: #f8aaa0;
			}
		}
		&:nth-child(2) {
			border-color: rgba(255, 255, 255, 0.67);

			button {
				color: #fff;
			}
		}
		&:nth-child(3) {
			border-color: rgba(152, 238, 192, 0.67);

			button {
				color: rgba(152, 238, 192, 0.9);
			}
		}

		button {
			padding: 1.5rem 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			font-size: 1.14286rem;
			font-style: normal;
			font-weight: 400;
			line-height: 120%;
			background: none;
			width: 100%;
			height: 100%;
		}

		@media (max-width: 1000px) {
			width: 7.42857rem;

			button {
				width: 100%;
				img {
					width: 5.14286rem;
					height: 5.14286rem;
				}
			}
		}

		@media (max-width: 390px) {
			width: 6rem;
		}
	}
`;
