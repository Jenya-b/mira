import { FC } from 'react';

import iconBtn from '@/assets/images/icons/chat.svg';
import { ButtonPrimary } from '@/styles/components';

import { ButtonSecondary, ControlsWrap } from './Cards.styled';

interface ControlsProps {
	btnText1: string;
	handleClickBtn1: () => void;
	btnText2?: string;
	handleClickBtn2?: () => void;
	isIcon?: boolean;
}

export const Controls: FC<ControlsProps> = ({
	btnText1,
	handleClickBtn1,
	btnText2,
	handleClickBtn2,
	isIcon = false,
}) => (
	<ControlsWrap>
		<ButtonPrimary onClick={handleClickBtn1}>{btnText1}</ButtonPrimary>
		{btnText2 && (
			<ButtonSecondary onClick={handleClickBtn2}>
				<span>{btnText2}</span>
				{isIcon && <img src={iconBtn} alt="" />}
			</ButtonSecondary>
		)}
	</ControlsWrap>
);
