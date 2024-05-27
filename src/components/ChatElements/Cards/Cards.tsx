import { FC } from 'react';

import { Slider } from '@/components/Slider/Slider';
import { useAppDispatch } from '@/store';
import { setHideInput } from '@/store/chat';

import { Wrapper } from './Cards.styled';
import { Controls } from './Controls';

interface CardsProps {
	data: string[];
}

export const Cards: FC<CardsProps> = ({ data }) => {
	const dispatch = useAppDispatch();

	const renderSliderData = (t: string): JSX.Element => {
		const list = t.split('\n');

		return (
			<div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
				{list.map((item) => (
					<p key={item}>{item}</p>
				))}
			</div>
		);
	};

	const handleClickBtn1 = (): void => {
		dispatch(setHideInput(false));
	};

	return (
		<Wrapper>
			<Slider data={data} renderData={renderSliderData} />
			<Controls btnText1="Создать новую мысль" handleClickBtn1={handleClickBtn1} />
		</Wrapper>
	);
};
