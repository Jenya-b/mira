import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { DistortionSlider } from '@/components/Slider/DistortionSlider';
import { DistortionCardType } from '@/constants/distortionCards';
import { path } from '@/router/path';
import { DegreeOfExpression, DistortionCardsEnum } from '@/store/chat';

import { Wrapper } from './Cards.styled';
import { Controls } from './Controls';

interface CardsProps {
	data: DistortionCardType;
	type: DistortionCardsEnum;
	degree: DegreeOfExpression;
	handleClickBtn1: () => void;
}

export const DistortionCards: FC<CardsProps> = ({ data, degree, type, handleClickBtn1 }) => {
	const navigate = useNavigate();

	return (
		<Wrapper>
			<DistortionSlider data={data} type={type} degree={degree} />
			<Controls
				isIcon
				btnText1="Начать терапию"
				btnText2="У меня вопрос"
				handleClickBtn1={handleClickBtn1}
				handleClickBtn2={() => navigate(path.request)}
			/>
		</Wrapper>
	);
};
