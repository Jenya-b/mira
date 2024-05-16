import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 2.6rem 1fr;
	column-gap: 2rem;

	@media (max-width: 768px) {
		align-self: flex-end;
		column-gap: 0.79rem;
		grid-template-columns: 2.14286rem 1fr;
	}
`;

export const Logo = styled.div`
	@media (max-width: 768px) {
		img {
			width: 2.14286rem;
			height: 2.14286rem;
		}
		&.user img {
			display: none;
		}
	}
`;

export const Text = styled.div`
	color: rgba(255, 255, 255, 0.9);
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: 130%;
	padding-top: 0.3rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.7rem;

	@media (max-width: 768px) {
		padding: 1.08rem 1.3rem;
		border-radius: 1rem;

		&.mira {
			background: #488ce1;
			max-width: 90%;
		}

		&.mira-check {
			background: #4eb97f;
			max-width: 90%;
		}

		&.user {
			color: #1e1e1e;
			background: #fff;
			max-width: 17rem;
		}
	}
`;
