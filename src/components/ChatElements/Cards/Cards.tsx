import { FC } from 'react';

import iconBtn from '@/assets/images/icons/chat.svg';
import { Slider } from '@/components/Slider/Slider';
import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';

import { ButtonPrimary, ButtonSecondary, Controls, Wrapper } from './Cards.styled';

interface CardsProps {
	text: string;
}

export const Cards: FC<CardsProps> = ({ text }) => {
	const renderSliderData = (): JSX.Element => <></>;

	return (
		<WithMessage logoParam={PersonMessage.MIRA_MAIN} text={text}>
			<Wrapper>
				<Slider data={[...Array(8)]} renderData={renderSliderData} />
				<Controls>
					<ButtonPrimary>Начать терапию</ButtonPrimary>
					<ButtonSecondary>
						<span>У меня вопрос</span>
						<img src={iconBtn} alt="" />
					</ButtonSecondary>
				</Controls>
			</Wrapper>
		</WithMessage>
	);
};
