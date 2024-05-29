import { FC } from 'react';

import coverImg from '@/assets/images/cardsSlider/2.png';
import { Cover, InstructionCover } from '@/components/ChatElements/Cards/Cards.styled';
import { Controls } from '@/components/ChatElements/Cards/Controls';
import { Slider } from '@/components/Slider/Slider';
import { furtherActionsList } from '@/constants/chat';

import { Container, Wrapper } from './CardsBlock.styled';

export const CardsBlock: FC = () => {
	const renderSliderData = (t: string, index: number): JSX.Element => {
		if (index === 0) {
			return (
				<Cover style={{ background: `url(${coverImg})` }}>
					<div className="warning">
						<div className="warning__icon">!</div>
						<p className="warning__text">Важно знать для лучшего результата </p>
					</div>
					<p className="title">{t}</p>
				</Cover>
			);
		}

		if (index % 2) {
			return (
				<div
					style={{
						padding: '3.36rem 1.79rem 1rem 1.79rem',
					}}
				>
					{t}
				</div>
			);
		}

		return <InstructionCover>{t}</InstructionCover>;
	};

	return (
		<Wrapper>
			<Container>
				<Slider data={furtherActionsList} renderData={renderSliderData} visible />
				<Controls
					btnText1="Продолжить"
					btnText2="Больше не показывать"
					handleClickBtn1={() => {}}
					handleClickBtn2={() => {}}
				/>
			</Container>
		</Wrapper>
	);
};
