import { FC } from 'react';

import { Controls } from '@/components/ChatElements/Cards/Controls';
import { Slider } from '@/components/Slider/Slider';

import { Container, Wrapper } from './CardsBlock.styled';

export const CardsBlock: FC = () => {
	const renderSliderData = (): JSX.Element => <></>;

	return (
		<Wrapper>
			<Container>
				<Slider data={[...Array(8)]} renderData={renderSliderData} />
				<Controls isFullBtn={false} />
			</Container>
		</Wrapper>
	);
};
