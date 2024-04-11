import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 1.71rem;

	@media (max-width: 768px) {
		padding: 13.36rem 1.43rem 1.29rem 1.43rem;
		background: #f9f9f9;
		border-bottom-left-radius: 2.85714rem;
		border-bottom-right-radius: 2.85714rem;
	}
`;

export const InfoBlock = styled.div`
	max-width: 25.64rem;
	width: 100%;
`;

export const Title = styled.h2`
	font-weight: 500;
	font-size: 2.85rem;
	letter-spacing: -0.02em;
	color: #1e1e1e;
`;

export const Subtitle = styled.h3`
	margin-top: 0.77rem;
	font-weight: 500;
	font-size: 1.14rem;
	line-height: 112%;
	letter-spacing: -0.02em;
	color: #909090;
`;

export const Controls = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.85rem;
`;

export const NumberInfo = styled.div`
	margin-top: 0.5rem;
	display: flex;
	column-gap: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.28571rem;

	p {
		color: #1e1e1e;
		font-size: 1.14286rem;
		letter-spacing: -0.02286rem;
	}
	button {
		background: none;
		color: #488ce1;
		font-size: 1rem;
		letter-spacing: -0.04rem;
		text-decoration-line: underline;
	}

	@media (max-width: 768px) {
		margin-top: 0rem;
		flex-direction: column;
		align-items: start;
		column-gap: 0rem;
		row-gap: 0.36rem;
	}
`;

export const Timer = styled.div`
	color: rgba(30, 30, 30, 0.6);
	text-align: center;
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.14286rem;

	span {
		text-decoration-line: underline;
	}
`;
