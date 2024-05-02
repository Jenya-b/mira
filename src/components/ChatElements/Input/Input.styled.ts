import styled from 'styled-components';

export const Label = styled.label`
	position: relative;
	justify-self: center;
	width: 49.64286rem;
	height: 6rem;
	z-index: ${({ theme }) => theme.order.mediumIndex};

	&.input,
	&.microphone {
		z-index: ${({ theme }) => theme.order.mainIndex};
	}

	@media (max-width: 1000px) {
		position: fixed;
		left: 0;
		bottom: 0;
		transform: translateX(0);
		width: 100%;
		background: rgba(40, 43, 113, 1);
		border-radius: 2.85714rem 2.85714rem 0rem 0rem;
		height: 5.07143rem;
		padding: 1.21rem 1.5rem 1.07rem 1.5rem;
		display: grid;
		grid-template-columns: 1fr 2.78rem;
		column-gap: 0.79rem;
		align-items: center;

		&.input {
			background: none;
		}
		&.microphone {
			background: none;

			input {
				display: none;
			}
		}
	}

	@media (max-width: 768px) {
		height: 6.1rem;
		padding: 1.21rem 1.5rem 2.1rem 1.5rem;
	}

	&.hidden {
		display: none;
	}
`;

export const StyledInput = styled.textarea`
	width: 100%;
	height: 100%;
	border-radius: 6.42857rem;
	background: rgba(40, 43, 113, 0.88);
	color: #fff;
	font-style: normal;
	font-weight: 500;
	line-height: 1.42857rem;
	padding: 2.3rem 10rem 0rem 2.5rem;
	resize: none;

	&::placeholder {
		color: rgba(255, 255, 255, 0.7);
	}

	@media (max-width: 1000px) {
		background: #3a4497;
		padding: 0.6rem 0.4rem 0 1.43rem;
	}
`;

export const Controls = styled.div`
	position: absolute;
	top: 50%;
	right: 1.79rem;
	transform: translateY(-50%);
	width: 7.39rem;
	height: 3.28571rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1000px) {
		justify-content: end;

		&.input {
			display: none;
		}
	}

	@media (max-width: 768px) {
		top: 1rem;
		transform: translateY(0);
	}
`;

export const Button = styled.button`
	width: 3.28571rem;
	height: 3.28571rem;
	border-radius: 50%;
	background: none;

	@media (max-width: 1000px) {
		background: #4eb97f;
		width: 2.78571rem;
		height: 2.78571rem;

		img {
			height: 1.38079rem;
		}
	}
`;
