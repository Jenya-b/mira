import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
	margin-top: 1.86rem;
	width: 100%;
	height: 23.14286rem;

	&.visible {
		overflow: visible;
	}

	.swiper-wrapper {
		@media (max-width: 480px) {
			@keyframes go-left-right {
				from {
					left: 0px;
				}
				to {
					left: -100px;
				}
			}

			animation: go-left-right 0.5s alternate;
			animation-delay: 1s;
			animation-iteration-count: 4;
		}
	}
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	font-size: 18px;
	border-radius: 1.42857rem;
	background: #488ce1;
	margin-right: 1.43rem;
	position: relative;

	&.swiper-slide {
		width: 25.21429rem;
		display: flex;
		justify-content: center;

		@media (max-width: 480px) {
			width: 100%;
		}

		svg {
			position: absolute;
			bottom: 3.79rem;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;

export const Order = styled.p`
	position: absolute;
	right: 0.86rem;
	bottom: 0.86rem;
	width: 2.78571rem;
	height: 1.57143rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-weight: 400;
	line-height: 2.57143rem;
	letter-spacing: -0.02rem;
	border-radius: 0.42857rem;
	background: rgba(255, 255, 255, 0.26);
	backdrop-filter: blur(2px);
`;
