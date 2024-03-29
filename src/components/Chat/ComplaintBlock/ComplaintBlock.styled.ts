import styled from 'styled-components';

export const List = styled.ul`
	position: relative;
	margin-top: 5.07rem;
	display: flex;
	justify-content: center;
	gap: 0.63rem;
	flex-wrap: wrap;

	&::before {
		position: absolute;
		content: 'Выберите 1 или более вариантов';
		top: -4rem;
		color: #fff;
		text-align: center;
		font-size: 1.42857rem;
		font-style: normal;
		font-weight: 400;
		line-height: 120%;
		width: 25.5rem;
		height: 2rem;

		@media (max-width: 1000px) {
			top: -2.8rem;
			font-size: 1rem;
		}
	}

	&.subtitle-hide {
		margin-top: 1.5rem;
	}

	&.subtitle-hide::before {
		display: none;
	}

	&::after {
		position: absolute;
		content: 'Опишите, пожалуйста, проблему в сообщении и отправьте нам';
		bottom: -5rem;
		max-width: 25.5rem;
		width: 100%;
		color: #fff;
		text-align: center;
		font-size: 1.42857rem;
		font-style: normal;
		font-weight: 400;
		line-height: 120%;

		@media (max-width: 1000px) {
			bottom: -3rem;
			font-size: 1rem;
		}
	}

	&.desc-act::after {
		display: none;
	}

	li {
		button {
			padding: 0rem 1.57rem;
			height: 3.78rem;
			border-radius: 0.88229rem;
			border: 0.882px solid rgba(255, 255, 255, 0.5);
			color: #fff;
			opacity: 0.8;
			background: none;
			font-size: 1.26043rem;
			font-style: normal;
			font-weight: 400;
			line-height: 120%;

			&.active {
				border: 2px solid #4eb97f;
				opacity: 1;
			}
		}
	}

	@media (max-width: 768px) {
		margin-top: 3.14rem;

		&.subtitle-hide {
			margin-bottom: 3rem;
		}

		li {
			font-size: 1.14286rem;
		}
	}
`;

export const Button = styled.button`
	margin-top: 3.57rem;
	max-width: 24.28571rem;
	width: 100%;
	height: 5.78571rem;
	border-radius: 1.42857rem;
	background: #4eb97f;

	color: #fff;
	font-size: 1.57143rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.03143rem;

	@media (max-width: 768px) {
		margin-top: 1.71rem;
	}
`;
