import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 49.6rem 1fr;
	overflow: auto;

	@media (max-width: 768px) {
		padding-top: 6rem;
		display: block;
	}
`;

export const Container = styled.div`
	padding: 3rem 0 1.5rem 0;
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
	row-gap: 3.21rem;
	justify-content: end;
	padding-bottom: 1rem;
	overflow: auto;
	height: max-content;

	@media (max-width: 768px) {
		padding: 1.5rem;
		row-gap: 1.73rem;
	}
`;

export const TextMessageWrap = styled.div`
	display: grid;
	grid-template-columns: 2.6rem 1fr;
	column-gap: 2rem;

	@media (max-width: 768px) {
		align-self: flex-end;
		column-gap: 1rem;
	}
`;

export const ThoughtsWrap = styled.div`
	margin-top: 3.64rem;
	grid-column: 2/3;
	grid-row: 2/3;
	display: flex;
	flex-direction: column;
	row-gap: 3.64rem;
`;

export const MessageLogo = styled.div`
	@media (max-width: 768px) {
		&.user img {
			display: none;
		}
	}
`;

export const MessageText = styled.p`
	color: rgba(255, 255, 255, 0.9);
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;

	@media (max-width: 768px) {
		padding: 1.08rem 1.3rem;
		border-radius: 1rem;

		&.mira {
			background: #488ce1;
			max-width: 90%;
		}

		&.user {
			color: #1e1e1e;
			background: #fff;
			max-width: 17rem;
		}
	}
`;
