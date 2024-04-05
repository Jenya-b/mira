import { FC } from 'react';

import { Slider } from '@/components/Slider/Slider';
import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';

import { Wrapper } from './Cards.styled';
import { Controls } from './Controls';

interface CardsProps {
	text: string;
}

export const Cards: FC<CardsProps> = ({ text }) => {
	const renderSliderData = (): JSX.Element => <></>;

	return (
		<WithMessage logoParam={PersonMessage.MIRA_MAIN} text={text}>
			<Wrapper>
				<Slider data={[...Array(8)]} renderData={renderSliderData} />
				<Controls />
			</Wrapper>
		</WithMessage>
	);
};
