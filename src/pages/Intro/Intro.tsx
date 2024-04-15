import { FC } from 'react';

import { Slider } from '@/components/Intro/Slider/Slider';

import { SliderWrap, Wrapper } from './Intro.styled';

const Intro: FC = () => (
	<Wrapper>
		<SliderWrap>
			<Slider />
		</SliderWrap>
	</Wrapper>
);

export default Intro;
