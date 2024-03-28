import styled from 'styled-components';

export const List = styled.ul`
	margin-top: 7rem;
	display: flex;
	justify-content: center;
	gap: 0.63rem;
	flex-wrap: wrap;

	li {
		height: 5.35679rem;

		button {
			padding: 0 1.57rem;
			height: 100%;
			border-radius: 0.88229rem;
			border: 0.882px solid rgba(255, 255, 255, 0.5);
			color: #fff;
			background: none;
			font-size: 1.26043rem;
			font-style: normal;
			font-weight: 400;
			line-height: 120%;
			opacity: 0.8;

			@media (max-width: 768px) {
				font-size: 1.14286rem;
			}
		}

		&:last-child {
			button {
				border: 0.882px solid #fff;
				opacity: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				column-gap: 0.82rem;
			}
		}
	}

	@media (max-width: 768px) {
		margin-top: 3.14rem;
		li {
			height: 4rem;
		}
	}
`;
