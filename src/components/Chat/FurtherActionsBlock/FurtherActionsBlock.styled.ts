import styled from 'styled-components';

export const List = styled.ul`
	margin-top: 3.93rem;
	max-width: 33.07143rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 1.43rem;

	@media (max-width: 768px) {
		margin-top: 3.29rem;
		row-gap: 1.14rem;
	}

	li {
		width: 100%;
		height: 5.28571rem;

		button {
			border-radius: 1rem;
			background: #488ce1;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 0.73rem;
			color: #fff;
			font-size: 1.28571rem;
			font-style: normal;
			font-weight: 500;
			line-height: 120%;

			span {
				display: inline-block;
				padding-top: 3px;
			}
		}

		&:last-child {
			button {
				border: 1px solid #fff;
				background: none;
			}
		}

		@media (max-width: 768px) {
			height: 5.21429rem;
			font-size: 1.14286rem;
		}
	}
`;
