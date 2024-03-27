import styled from 'styled-components';

export const List = styled.ul`
	margin-top: 7rem;
	display: flex;
	justify-content: center;
	gap: 0.63rem;
	flex-wrap: wrap;

	li {
		button {
			padding: 1.5rem 1.57rem;
			border-radius: 0.88229rem;
			border: 0.882px solid rgba(255, 255, 255, 0.5);
			color: #fff;
			background: none;
			font-size: 1.26043rem;
			font-style: normal;
			font-weight: 400;
			line-height: 120%;
		}
	}

	@media (max-width: 1000px) {
		margin-top: 3.14rem;

		li {
			font-size: 1.14286rem;
		}
	}
`;
