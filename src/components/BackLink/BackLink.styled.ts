import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.29rem;
	width: 15.35714rem;
	height: 3.57143rem;
	border-radius: 6.42857rem;
	border: 1px solid rgba(255, 255, 255, 0.17);
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: -0.02rem;

	@media (max-width: 480px) {
		order: 2;
		border-radius: 1.42857rem;
		background: #4eb97f;
		height: 5.78571rem;
		width: 100%;
		font-size: 1.57143rem;
		letter-spacing: -0.03143rem;

		img {
			display: none;
		}
	}
`;
