import { FC, useRef } from 'react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { SwiperRef } from 'swiper/react';

import { Slide1 } from '../Slides/Slide1/Slide1';
import { Slide2 } from '../Slides/Slide2/Slide2';
import { Slide3 } from '../Slides/Slide3/Slide3';
import { Slide4 } from '../Slides/Slide4/Slide4';

import { StyledSwiper, StyledSwiperSlide } from './Slider.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider: FC = () => {
	const sliderRef = useRef<SwiperRef>(null);

	const handleNext = (): void => {
		if (!sliderRef.current) {
			return;
		}
		sliderRef.current.swiper.slideNext();
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
			slide: <Slide4 />,
		},
	];

	return (
		<>
			<StyledSwiper
				ref={sliderRef}
				cssMode
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
		</>
	);
};
