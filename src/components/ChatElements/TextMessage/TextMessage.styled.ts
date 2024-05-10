import styled from 'styled-components';

export const ThoughtsWrap = styled.div`
	margin-top: 3.64rem;
	grid-column: 2/3;
	grid-row: 2/3;
	display: flex;
	flex-direction: column;
	row-gap: 3.64rem;

	@media (max-width: 768px) {
		margin-top: 2.43rem;
		row-gap: 1.43rem;
		grid-column: 1/3;
	}
`;

export const CheckWithUserList = styled.ul`
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
