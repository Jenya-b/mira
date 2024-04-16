import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
	margin-top: 1.86rem;
	width: 100%;

	&.swiper-css-mode > .swiper-wrapper {
	}

	&.my-slider {
		overflow: visible;
		overflow-x: clip;

		@media (max-width: 1000px) {
			margin-top: 0;
			height: 100%;
		}

		.swiper-pagination {
			position: fixed;
			bottom: 3rem;

			@media (max-width: 1000px) {
				bottom: 9rem;
			}

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
	overflow: visible;
`;
