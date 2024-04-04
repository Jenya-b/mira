import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-bottom: 1.71rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h3 {
		color: #fff;
		font-size: 1.42857rem;
		font-style: normal;
		font-weight: 500;
		line-height: 110%;
	}
`;

export const List = styled.ul`
	margin-top: 2.14rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.71rem;

	li {
		height: 3.214rem;
		width: 100%;

		button {
			width: 100%;
			height: 100%;
			border-radius: 0.85714rem;
			background: #292c72;
			color: #fff;
			font-size: 1.14286rem;
			font-style: normal;
			font-weight: 500;
			line-height: 120%;
		}
	}
`;
