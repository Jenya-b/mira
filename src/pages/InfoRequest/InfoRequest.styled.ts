import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 2rem 1.21rem;
	display: grid;
	grid-template-columns: 1fr minmax(auto, 45rem) 1fr;
	align-items: center;
	height: 100vh;
	overflow: auto;
`;

export const Container = styled.div`
	padding: 5.29rem 4.21rem;
	grid-column: 2/3;
	border-radius: 2.85714rem;
	background: #f9f9f9;
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

export const Form = styled.form`
	margin-top: 2.21rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.86rem;
`;

export const Info = styled.p`
	color: rgba(30, 30, 30, 0.4);
	text-align: center;
	font-size: 0.85714rem;
	font-weight: 500;
	line-height: 1rem;
`;
