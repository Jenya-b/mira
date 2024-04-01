import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 49.6rem 1fr;
`;

export const Container = styled.div`
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
	row-gap: 3.21rem;
	justify-content: end;
	padding-bottom: 1rem;
`;

export const TextMessageWrap = styled.div`
	display: grid;
	grid-template-columns: 2.6rem 1fr;
	column-gap: 2rem;
`;

export const MessageLogo = styled.div``;

export const MessageText = styled.p`
	color: rgba(255, 255, 255, 0.9);
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
`;
