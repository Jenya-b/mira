import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 2rem 1.21rem;
	display: grid;
	grid-template-columns: 1fr minmax(auto, 45rem) 1fr;
	align-items: center;
	height: 100vh;
	overflow: auto;

	@media (max-width: 1000px) {
		padding: 0rem;
	}
`;

export const Container = styled.div`
	padding: 5.29rem 4.21rem;
	height: 100%;
	overflow: auto;
	grid-column: 2/3;
	border-radius: 2.85714rem;
	background: #f9f9f9;

	@media (max-width: 1000px) {
		padding-top: 10rem;
		border-radius: 0rem;
	}

	@media (max-width: 768px) {
		padding: 8rem 1.14rem 2rem 1.14rem;
		border-radius: 0rem;
	}
`;

export const Title = styled.h2`
	color: #1e1e1e;
	font-size: 2.85714rem;
	font-weight: 500;
	letter-spacing: -0.05714rem;
`;

export const Subtitle = styled.h3`
	margin-top: 0.5rem;
	color: #909090;
	font-size: 1.14286rem;
	font-weight: 500;
	line-height: 1.28571rem;
	letter-spacing: -0.02286rem;
`;
