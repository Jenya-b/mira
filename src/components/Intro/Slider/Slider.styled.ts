import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
	margin-top: 1.86rem;
	width: 100%;

	&.my-slider {
		overflow: visible;
		overflow-x: clip;

		.swiper-pagination {
			position: fixed;
			bottom: 3rem;

			.swiper-pagination-bullet {
				width: 0.85714rem;
				height: 0.85714rem;
				background: none;
				border: 1px solid rgba(255, 255, 255, 0.71);
			}

			.swiper-pagination-bullet.swiper-pagination-bullet-active {
				background-color: #fff;
			}
		}
	}
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	margin-right: 1.43rem;
	overflow: visible;
`;
