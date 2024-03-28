import { animated, useSpring } from '@react-spring/web';
import { FC, memo, useCallback, useState } from 'react';

import {
	FurtherActions,
	FurtherActionsEnum,
	furtherActionsHelp,
	furtherActionsMain,
	furtherActionsPractice,
} from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';

import { List } from './FurtherActionsBlock.styled';

interface SlideProps {
	list: FurtherActions[];
	handleChangeSlide: (item: FurtherActionsEnum) => void;
}

const Slide: FC<SlideProps> = memo(({ list, handleChangeSlide }) => (
	<List>
		{list.map((i) => (
			<li key={i.title}>
				<button onClick={() => handleChangeSlide(i.redirection)}>
					{i.img && <img src={i.img} alt="" />}
					<span>{i.title}</span>
				</button>
			</li>
		))}
	</List>
));

export const FurtherActionsBlock: FC = () => {
	const [activeSlide, setActiveSlide] = useState<FurtherActionsEnum>(FurtherActionsEnum.MAIN);
	const [animation, setAnimation] = useState(false);

	const { x } = useSpring({
		from: { x: 0 },
		x: animation ? 1 : 0,
		config: { duration: 200 },
	});

	const handleChangeSlide = useCallback((item: FurtherActionsEnum): (() => void) => {
		setAnimation(true);
		const timer = setTimeout(() => {
			setActiveSlide(item);
			setAnimation(false);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	const renderElement = useCallback((): JSX.Element => {
		switch (activeSlide) {
			case FurtherActionsEnum.MAIN:
				return <Slide list={furtherActionsMain} handleChangeSlide={handleChangeSlide} />;
			case FurtherActionsEnum.PRACTICE:
				return <Slide list={furtherActionsPractice} handleChangeSlide={handleChangeSlide} />;
			case FurtherActionsEnum.HELP:
				return <Slide list={furtherActionsHelp} handleChangeSlide={handleChangeSlide} />;
			default:
				return <></>;
		}
	}, [activeSlide]);

	return (
		<animated.div
			style={{
				opacity: x.to({ range: [0, 1], output: [1, 0] }),
				height: '100%',
			}}
		>
			<WithChat title="Что делаем дальше?">{renderElement()}</WithChat>
		</animated.div>
	);
};
