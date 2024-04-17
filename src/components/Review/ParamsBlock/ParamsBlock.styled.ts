import styled from 'styled-components';

import { Colors } from '@/styles/colors';

export const Title = styled.h3`
	font-size: 1.28571rem;
	font-weight: 500;
	line-height: 110%;
	margin-bottom: 1.64rem;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 0.71rem;

	li {
		font-size: 1.14286rem;
		font-weight: 500;
		line-height: 120%;
		width: 100%;
		height: 3.21rem;
		border-radius: 0.85714rem;
		background: ${Colors.BLUE_300};
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&.exception {
		li {
			background: ${Colors.BLUE_400};
		}
	}
`;
