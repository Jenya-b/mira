import { FC, useEffect } from 'react';

import { Slider } from '@/components/Intro/Slider/Slider';
import { useResize } from '@/hooks/useResize';

import { SliderWrap, Wrapper } from './Intro.styled';

const Intro: FC = () => {
	const [, innerHeight] = useResize();

	useEffect(() => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, [innerHeight]);

	return (
		<Wrapper>
			<SliderWrap>
				<Slider />
			</SliderWrap>
		</Wrapper>
	);
};

export default Intro;
