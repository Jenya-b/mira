import styled from 'styled-components';

export const List = styled.ul`
	margin-top: 5.07rem;
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

			&.active {
				border: 2px solid #4eb97f;
			}
		}
	}

	@media (max-width: 1000px) {
		margin-top: 3.14rem;

		li {
			font-size: 1.14286rem;
		}
	}
`;

export const Subtitle = styled.h3`
	margin-top: 1rem;
	margin-bottom: -2.7rem;
	color: #fff;
	text-align: center;
	font-size: 1.42857rem;
	font-style: normal;
	font-weight: 400;
	line-height: 120%;
`;

export const Info = styled.p`
	margin-top: 3.29rem;
	max-width: 25.5rem;
	width: 100%;
	color: #fff;
	text-align: center;
	font-size: 1.42857rem;
	font-style: normal;
	font-weight: 400;
	line-height: 120%;
`;
