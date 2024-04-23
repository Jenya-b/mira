import { FC } from 'react';

import { Button } from '../styles';

import img1Mob from '@/assets/images/intro-slide-1-mob.png';
import img1 from '@/assets/images/intro-slide-1.png';
import img2Mob from '@/assets/images/intro-slide-2-mob.png';
import img2 from '@/assets/images/intro-slide-2.png';
import { useResize } from '@/hooks/useResize';

import { ImagesWrap, Title, Wrapper } from './Slide1.styled';

interface Slide1Props {
	handleNext: () => void;
}

export const Slide1: FC<Slide1Props> = ({ handleNext }) => {
	const [innerWidth] = useResize();

	return (
		<Wrapper>
			<Title>Станьте лучшей версией себя</Title>
			<Button onClick={handleNext}>Я готов(а)</Button>
			<ImagesWrap>
				<img src={innerWidth > 1000 ? img1 : img1Mob} alt="" />
				<img src={innerWidth > 1000 ? img2 : img2Mob} alt="" />
			</ImagesWrap>
		</Wrapper>
	);
};
