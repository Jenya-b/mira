import InputMask from 'react-input-mask';
import styled, { css } from 'styled-components';

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

export const ButtonPrimary = styled.button`
	width: 100%;
	height: 5.78571rem;
	border-radius: 20px;
	background: #4eb97f;

	color: #fff;
	font-size: 22px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.44px;
`;

export const Label = styled.label`
	position: relative;
	width: 100%;
	height: 4.28rem;

	span {
		position: absolute;
		left: 2rem;
		top: 0.88rem;
		color: #c2c2c2;
		font-size: 0.71rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.02rem;
	}
`;

const inputCss = css`
	padding-top: 0.9rem;
	padding-left: 2rem;
	width: 100%;
	height: 100%;
	border-radius: 20px;
	background: #fff;

	color: #1e1e1e;
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.04571rem;
`;

export const Input = styled.input`
	${inputCss}
`;

export const StyledInputMask = styled(InputMask)`
	${inputCss}
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
