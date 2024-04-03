import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 2.6rem 1fr;
	column-gap: 2rem;

	@media (max-width: 768px) {
		align-self: flex-end;
		column-gap: 0.79rem;
	}
`;

export const Logo = styled.div`
	@media (max-width: 768px) {
		img {
			width: 2.14286rem;
			height: 2.14286rem;
		}
	}
`;

export const Text = styled.p`
	color: rgba(255, 255, 255, 0.9);
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: 130%;

	@media (max-width: 768px) {
		padding: 1.08rem 1.3rem;
		border-radius: 1rem;
		background: #4eb97f;
		max-width: 90%;
	}
`;

export const List = styled.ul`
	grid-column: 2/3;
	margin-top: 2.14rem;
	display: flex;
	flex-wrap: wrap;
	column-gap: 0.79rem;
	row-gap: 0.79rem;

	@media (max-width: 768px) {
		margin-top: 1.36rem;
		grid-column: 1/3;
		justify-content: center;
	}

	li {
		height: 4.28571rem;

		button {
			padding: 0 2.52rem;
			height: 100%;
			border-radius: 0.88229rem;
			border: 1px solid rgba(255, 255, 255, 0.5);
			opacity: 0.8;
			background: none;
			color: #fff;
			font-size: 1.14286rem;
			font-style: normal;
			font-weight: 500;
			line-height: 120%;

			&.active {
				border-radius: 0.88229rem;
				border: 2px solid #4eb97f;
				opacity: 1;
			}
		}
	}
`;
