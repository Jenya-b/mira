import { FC, useEffect, useState } from 'react';

import { Cover, InstructionCover } from '../ChatElements/Cards/Cards.styled';

import {
	DegreeOfExpression,
	DegreeOfExpressionNames,
	DistortionCardType,
	DistortionCardsEnum,
	DistortionNames,
} from '@/constants/distortionCards';
import { arrayConversion } from '@/utils/arrayConversion';

import { Order, StyledSwiper, StyledSwiperSlide } from './Slider.styled';

interface SliderProps {
	data: DistortionCardType;
	type: DistortionCardsEnum;
	degree: DegreeOfExpression;
}

export const DistortionSlider: FC<SliderProps> = ({ data, degree, type }) => {
	const [startingIndex, setStartingIndex] = useState({
		instruction: 0,
		all: 0,
	});

	useEffect(() => {
		const privateManifestationsLength = arrayConversion(data.privateManifestations, 3).length;
		const keywordsLength = arrayConversion(data.keywords, 5).length;

		setStartingIndex({
			instruction: privateManifestationsLength + 4,
			all: privateManifestationsLength + 4 + keywordsLength,
		});
	}, []);

	const renderNumericalInfo = (i: number, length: number): JSX.Element => (
		<>
			<svg width="115" height="16" viewBox="0 0 115 16" fill="none">
				<path
					d="M114.707 8.70711C115.098 8.31658 115.098 7.68342 114.707 7.29289L108.343 0.928932C107.953 0.538408 107.319 0.538408 106.929 0.928932C106.538 1.31946 106.538 1.95262 106.929 2.34315L112.586 8L106.929 13.6569C106.538 14.0474 106.538 14.6805 106.929 15.0711C107.319 15.4616 107.953 15.4616 108.343 15.0711L114.707 8.70711ZM0 9H114V7H0V9Z"
					fill="white"
				/>
			</svg>
			<Order>
				{i}/{length}
			</Order>
		</>
	);

	return (
		<StyledSwiper
			slidesPerView="auto"
			pagination={{
				clickable: true,
			}}
			grabCursor
		>
			<StyledSwiperSlide>
				<Cover>
					<div className="warning">
						<div
							className={`warning__degree ${degree === DegreeOfExpression.LOW ? 'low' : degree === DegreeOfExpression.AVERAGE ? 'average' : 'high'}`}
						>
							{DegreeOfExpressionNames[degree]}
						</div>
						<p className="warning__text">степень выраженности</p>
					</div>
					<p className="title">Что такое «{DistortionNames[type]}»?</p>
				</Cover>
				{renderNumericalInfo(1, startingIndex.all)}
			</StyledSwiperSlide>
			<StyledSwiperSlide>
				<div
					style={{
						padding: '3.36rem 1.79rem 1rem 1.79rem',
					}}
				>
					{data.mainDesc}
				</div>
				{renderNumericalInfo(2, startingIndex.all)}
			</StyledSwiperSlide>
			<StyledSwiperSlide>
				<InstructionCover>Частые проявления</InstructionCover>
				{renderNumericalInfo(3, startingIndex.all)}
			</StyledSwiperSlide>
			{arrayConversion(data.privateManifestations, 3).map((list, index) => (
				<StyledSwiperSlide key={index}>
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							rowGap: '0.5rem',
							padding: '3.36rem 1.79rem 1rem 1.79rem',
						}}
					>
						{list.map((item, i) => (
							<div key={i} style={{ display: 'flex', columnGap: '0.5rem' }}>
								<p>{i + 1}.</p>
								<p>{item}</p>
							</div>
						))}
					</div>
					{renderNumericalInfo(4 + index, startingIndex.all)}
				</StyledSwiperSlide>
			))}
			<StyledSwiperSlide>
				<InstructionCover>Ключевые слова</InstructionCover>
				{renderNumericalInfo(startingIndex.instruction, startingIndex.all)}
			</StyledSwiperSlide>
			{arrayConversion(data.keywords, 5).map((list, index) => (
				<StyledSwiperSlide key={index}>
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'column',
							rowGap: '0.5rem',
							padding: '3.36rem 1.79rem 1rem 1.79rem',
						}}
					>
						{list.map((item, i) => (
							<div key={i} style={{ display: 'flex', columnGap: '0.5rem' }}>
								<p style={{ width: '2rem' }}>{i + 1}.</p>
								<p>{item}</p>
							</div>
						))}
					</div>
					{renderNumericalInfo(startingIndex.instruction + 1 + index, startingIndex.all)}
				</StyledSwiperSlide>
			))}
		</StyledSwiper>
	);
};
