import { FC } from 'react';

import { Slider } from '@/components/Slider/Slider';
import { useAppDispatch } from '@/store';
import { setIsButtonsBlock } from '@/store/chat';

import { Cover, InstructionCover, Wrapper } from './Cards.styled';
import { Controls } from './Controls';

interface CardsProps {
	data: string[];
}

export const ThoughtsCards: FC<CardsProps> = ({ data }) => {
	const dispatch = useAppDispatch();

	const renderSliderData = (t: string, index: number): JSX.Element => {
		if (index === 0) {
			return (
				<Cover>
					<div className="warning">
						<div className="warning__icon">!</div>
						<p className="warning__text">Важно знать для лучшего результата </p>
					</div>
					<p className="title">{t}</p>
				</Cover>
			);
		}

		if (index === 4) {
			return <InstructionCover>{t}</InstructionCover>;
		}

		const list = t.split('\n');

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					rowGap: '0.5rem',
					padding: '5.36rem 1.79rem 1rem 1.79rem',
				}}
			>
				{index > 4 ? (
					<div style={{ display: 'flex', columnGap: '0.5rem' }}>
						<p>{index - 4}.</p>
						<p>{t}</p>
					</div>
				) : (
					list.map((item) => <p key={item}>{item}</p>)
				)}
			</div>
		);
	};

	const handleClickBtn1 = (): void => {
		dispatch(setIsButtonsBlock(false));
	};

	return (
		<Wrapper>
			<Slider data={data} renderData={renderSliderData} />
			<Controls isIcon btnText1="Создать новую мысль" handleClickBtn1={handleClickBtn1} />
		</Wrapper>
	);
};
