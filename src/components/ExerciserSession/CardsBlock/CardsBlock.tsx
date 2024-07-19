import { FC } from 'react';

import coverImg from '@/assets/images/cardsSlider/8.png';
import { Cover, InstructionCover } from '@/components/ChatElements/Cards/Cards.styled';
import { Controls } from '@/components/ChatElements/Cards/Controls';
import { Slider } from '@/components/Slider/Slider';
import { exerciserCardsList } from '@/constants/chat';
import { usePostMessageMutation } from '@/services/api/exerciserSessions';
import { useAppDispatch } from '@/store';
import { SessionBlocks, setSessionBlock } from '@/store/exerciserSession';

import { Container, Wrapper } from './CardsBlock.styled';

export const CardsBlock: FC = () => {
	const dispatch = useAppDispatch();
	const [fetchPostMessage] = usePostMessageMutation();

	const renderSliderData = (t: string, index: number): JSX.Element => {
		if (index === 0) {
			return (
				<Cover style={{ background: `url(${coverImg})` }}>
					<div className="warning">
						<div className="warning__icon">!</div>
						<p className="warning__text">Важно знать для лучшего результата</p>
					</div>
					<p className="title">{t}</p>
				</Cover>
			);
		}

		if (index === 2 || index === 7) {
			return <InstructionCover>{t}</InstructionCover>;
		}

		const list = t.split('\n');

		return (
			<div
				style={{
					padding: '3.36rem 1.79rem 1rem 1.79rem',
					display: 'flex',
					flexDirection: 'column',
					rowGap: '1.5rem',
				}}
			>
				{list.map((item) => (
					<p key={item}>{item}</p>
				))}
			</div>
		);
	};

	const handleNavigate = (): void => {
		fetchPostMessage({
			action: 'GET_SCRIPT',
			content: 'Начать практику',
		})
			.unwrap()
			.then(() => dispatch(setSessionBlock(SessionBlocks.CHAT)));
	};

	return (
		<Wrapper>
			<Container>
				<Slider data={exerciserCardsList} renderData={renderSliderData} visible />
				<Controls btnText1="Начать практику" handleClickBtn1={handleNavigate} />
			</Container>
		</Wrapper>
	);
};
