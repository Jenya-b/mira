import { FC } from 'react';

import iconBtn from '@/assets/images/icons/chat.svg';
import { ButtonPrimary } from '@/styles/components';

import { ButtonSecondary, ControlsWrap } from './Cards.styled';

interface ControlsProps {
	isFullBtn?: boolean;
}

export const Controls: FC<ControlsProps> = ({ isFullBtn = true }) => (
	<ControlsWrap>
		<ButtonPrimary>Начать терапию</ButtonPrimary>
		{isFullBtn && (
			<ButtonSecondary>
				<span>У меня вопрос</span>
				<img src={iconBtn} alt="" />
			</ButtonSecondary>
		)}
	</ControlsWrap>
);
