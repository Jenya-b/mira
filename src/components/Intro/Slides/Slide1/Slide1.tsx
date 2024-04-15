import { FC } from 'react';

import { Button, Title } from '../styles';

import img1 from '@/assets/images/intro-slide-1.png';
import img2 from '@/assets/images/intro-slide-2.png';

import { ImagesWrap, Wrapper } from './Slide1.styled';

interface Slide1Props {
	handleNext: () => void;
}

export const Slide1: FC<Slide1Props> = ({ handleNext }) => (
	<Wrapper>
		<Title className="black">Станьте лучшей версией себя</Title>
		<Button onClick={handleNext}>Я готов(а)</Button>
		<ImagesWrap>
			<img src={img1} alt="" />
			<img src={img2} alt="" />
		</ImagesWrap>
	</Wrapper>
);
