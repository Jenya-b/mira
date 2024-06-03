import { FC } from 'react';

import { DistortionSlider } from '@/components/Slider/DistortionSlider';
import {
	DegreeOfExpression,
	DistortionCardType,
	DistortionCardsEnum,
} from '@/constants/distortionCards';

import { Wrapper } from './Cards.styled';
import { Controls } from './Controls';

interface CardsProps {
	data: DistortionCardType;
	type: DistortionCardsEnum;
	degree: DegreeOfExpression;
}

export const DistortionCards: FC<CardsProps> = ({ data, degree, type }) => {
	const handleClickBtn1 = (): void => {};

	return (
		<Wrapper>
			<DistortionSlider data={data} type={type} degree={degree} />
			<Controls
				isIcon
				btnText1="Начать терапию"
				btnText2="У меня вопрос"
				handleClickBtn1={handleClickBtn1}
				handleClickBtn2={() => {}}
			/>
		</Wrapper>
	);
};
