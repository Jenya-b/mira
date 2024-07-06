import { FC } from 'react';

import { Slider } from '@/components/Slider/Slider';
import { ButtonsWS } from '@/store/chat';

import { Cover, InstructionCover, Wrapper } from './Cards.styled';
import { Controls } from './Controls';

interface CardsProps {
	data: string[];
	buttonParam: ButtonsWS;
	sendCheckUser: (content: string, action: string, action_param?: number, parent?: number) => void;
	parent: number | undefined;
}

export const ThoughtsCards: FC<CardsProps> = ({ data, buttonParam, sendCheckUser, parent }) => {
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

	return (
		<Wrapper>
			<Slider data={data} renderData={renderSliderData} />
			<Controls
				isIcon
				btnText1="Создать новую мысль"
				handleClickBtn1={() =>
					sendCheckUser(buttonParam.content, buttonParam.action, buttonParam.action_param, parent)
				}
			/>
		</Wrapper>
	);
};
