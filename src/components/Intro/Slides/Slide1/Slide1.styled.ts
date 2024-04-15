import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #f9f9f9;
	border-radius: 2.85714rem;
	height: 29.5rem;
	padding: 0rem 4.21rem;
	position: relative;
	overflow: visible;
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 2.07rem;
`;

export const ImagesWrap = styled.div`
	position: absolute;
	top: 50%;
	right: 3.33rem;
	transform: translateY(-50%);
	width: 40rem;
	height: 40rem;

	img {
		&:nth-child(1) {
			position: absolute;
			top: 0;
		}
		&:nth-child(2) {
			position: absolute;
			bottom: 0;
			right: 0;
		}
	}
`;
