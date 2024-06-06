import { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { SwiperRef } from 'swiper/react';

import { Slide1 } from '../Slides/Slide1/Slide1';
import { Slide2 } from '../Slides/Slide2/Slide2';
import { Slide3 } from '../Slides/Slide3/Slide3';
import { Slide4 } from '../Slides/Slide4/Slide4';
import { Slide5 } from '../Slides/Slide5/Slide5';
import { Slide6 } from '../Slides/Slide6/Slide6';
import { Slide7 } from '../Slides/Slide7/Slide7';

import { path } from '@/router/path';
import { useUpdateUserMutation } from '@/services/api/user';

import { StyledSwiper, StyledSwiperSlide } from './Slider.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider: FC = () => {
	const navigate = useNavigate();
	const sliderRef = useRef<SwiperRef>(null);
	const sliderRef2 = useRef<SwiperRef>(null);
	const [isNextSlider, setNextSlider] = useState(false);
	const [fetchUpdateUser] = useUpdateUserMutation();

	const handleNext = (): void => {
		if (!isNextSlider && sliderRef.current) {
			sliderRef.current.swiper.slideNext();
		} else if (isNextSlider && sliderRef2.current) {
			sliderRef2.current.swiper.slideNext();
		}
	};

	const handleNextSlider = (): void => {
		setNextSlider(true);
	};

	const handleNavigate = (): void => {
		fetchUpdateUser({ intro_passed: true })
			.unwrap()
			.then(() => navigate(path.training));
	};

	const slides = [
		{
			slide: <Slide1 handleNext={handleNext} />,
		},
		{
			slide: <Slide2 handleNext={handleNext} />,
		},
		{
			slide: <Slide3 handleNext={handleNext} />,
		},
		{
			slide: <Slide4 handleNextSlider={handleNextSlider} />,
		},
	];

	const slides2 = [
		{
			slide: <Slide5 handleNext={handleNext} />,
		},
		{
			slide: <Slide6 handleNext={handleNext} />,
		},
		{
			slide: <Slide7 handleNext={handleNavigate} />,
		},
	];

	return (
		<>
			<StyledSwiper
				style={{ display: isNextSlider ? 'none' : 'block' }}
				ref={sliderRef}
				allowTouchMove={false}
				noSwiping
				pagination
				mousewheel
				keyboard
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="my-slider"
			>
				{slides.map(({ slide }, i) => (
					<StyledSwiperSlide key={i}>{slide}</StyledSwiperSlide>
				))}
			</StyledSwiper>
			<StyledSwiper
				style={{ display: !isNextSlider ? 'none' : 'block' }}
				ref={sliderRef2}
				allowTouchMove={false}
				noSwiping
				mousewheel
				keyboard
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="my-slider"
			>
				{slides2.map(({ slide }, i) => (
					<StyledSwiperSlide key={i}>{slide}</StyledSwiperSlide>
				))}
			</StyledSwiper>
		</>
	);
};
