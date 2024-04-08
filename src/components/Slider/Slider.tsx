import { Order, StyledSwiper, StyledSwiperSlide } from './Slider.styled';

interface SliderProps<T> {
	data: T[];
	renderData: (item: T) => JSX.Element;
	visible?: boolean;
}

export const Slider = <T,>({ data, renderData, visible = false }: SliderProps<T>): JSX.Element => (
	<StyledSwiper
		slidesPerView="auto"
		pagination={{
			clickable: true,
		}}
		grabCursor
		className={visible ? 'visible' : ''}
	>
		{data.map((item, i, array) => (
			<StyledSwiperSlide key={i}>
				{renderData(item)}
				<svg width="115" height="16" viewBox="0 0 115 16" fill="none">
					<path
						d="M114.707 8.70711C115.098 8.31658 115.098 7.68342 114.707 7.29289L108.343 0.928932C107.953 0.538408 107.319 0.538408 106.929 0.928932C106.538 1.31946 106.538 1.95262 106.929 2.34315L112.586 8L106.929 13.6569C106.538 14.0474 106.538 14.6805 106.929 15.0711C107.319 15.4616 107.953 15.4616 108.343 15.0711L114.707 8.70711ZM0 9H114V7H0V9Z"
						fill="white"
					/>
				</svg>
				<Order>
					{i + 1}/{array.length}
				</Order>
			</StyledSwiperSlide>
		))}
	</StyledSwiper>
);
