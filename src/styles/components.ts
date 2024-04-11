import ReactInputMask from 'react-input-mask';
import styled, { css } from 'styled-components';

import { theme as th } from './theme';

export const ButtonPrimary = styled.button`
	background: ${({ theme }) => theme.colors.buttonBgPrimary};
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 1.57143rem;
	font-weight: 500;
	letter-spacing: -0.03143rem;
	height: 5.78571rem;
	width: 100%;
	border-radius: 1.42857rem;

	&:hover {
		border-radius: 1.42857rem;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%),
			${({ theme }) => theme.colors.buttonBgPrimary};
	}

	&:disabled {
		background: ${({ theme }) => theme.colors.buttonBgDisabled};
		color: ${({ theme }) => theme.colors.buttonTextDisabled};
	}
`;

const labelCss = css`
	position: relative;
	width: 100%;

	span:nth-child(1) {
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

	span:nth-child(2) {
		position: absolute;
		right: 2rem;
		top: 50%;
		transform: translateY(-50%);
		color: #ff0f00;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.28571rem;
		letter-spacing: -0.04rem;
	}

	&.error {
		input {
			background: #fce7e7;
			color: rgba(255, 15, 0, 1);
		}

		span:nth-child(1) {
			color: rgba(255, 15, 0, 0.25);
		}
	}
`;

export const LabelPrimary = styled.label`
	${labelCss}
	height: 4.28rem;
`;

export const LabelSecondary = styled.label`
	${labelCss}
	height: 11rem;
`;

const inputCss = css`
	padding-top: 0.9rem;
	padding-left: 2rem;
	width: 100%;
	height: 100%;
	border-radius: 20px;
	background: ${th.colors.inputBgPrimary};

	color: ${th.colors.textSecondary};
	font-size: 1.14286rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.04571rem;
`;

export const InputPrimary = styled.input`
	${inputCss}
`;

export const StyledInputMask = styled(ReactInputMask)`
	${inputCss}
`;

export const Textarea = styled.textarea`
	${inputCss}
	padding-top: 1.9rem;
	resize: none;
`;

export const LabelSelect = styled(LabelPrimary)`
	position: relative;
	svg {
		position: absolute;
		top: 50%;
		right: 1.68rem;
		transform: translateY(-50%);
		height: 0.42857rem;
		width: 0.75rem;
	}
`;

export const SelectPrimary = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	padding-top: 0.9rem;
	padding-left: 1.8rem;
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

	option {
	}
`;
