import { animated, useSpring } from '@react-spring/web';
import { FC, memo, useCallback, useState } from 'react';

import {
	FurtherActions,
	FurtherActionsEnum,
	furtherActionsHelp,
	furtherActionsHelpHome,
	furtherActionsMain,
	furtherActionsPractice,
	furtherActionsPracticeHome,
	homeActions,
} from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { useAppDispatch } from '@/store';
import { SessionBlocks, setSessionBlock } from '@/store/chat';

import { List } from './FurtherActionsBlock.styled';

interface SlideProps {
	list: FurtherActions[];
	handleChangeSlide: (item: FurtherActionsEnum) => void;
}

const Slide: FC<SlideProps> = memo(({ list, handleChangeSlide }) => {
	const dispatch = useAppDispatch();

	const handleClick = (
		redirection: FurtherActionsEnum | undefined,
		sessionBlocks: SessionBlocks | undefined
	): void => {
		if (redirection !== undefined) {
			handleChangeSlide(redirection);
		} else if (sessionBlocks !== undefined) {
			dispatch(setSessionBlock(sessionBlocks));
		}
	};

	return (
		<List>
			{list.map((i) => (
				<li key={i.title}>
					<button onClick={() => handleClick(i.redirection, i.sessionBlocks)}>
						{i.img && <img src={i.img} alt="" />}
						<span>{i.title}</span>
					</button>
				</li>
			))}
		</List>
	);
});

interface FurtherActionsBlockProps {
	isHome?: boolean;
}

export const FurtherActionsBlock: FC<FurtherActionsBlockProps> = ({ isHome = false }) => {
	const [activeSlide, setActiveSlide] = useState<FurtherActionsEnum>(
		isHome ? FurtherActionsEnum.HOME : FurtherActionsEnum.MAIN
	);
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
			case FurtherActionsEnum.HOME:
				return <Slide list={homeActions} handleChangeSlide={handleChangeSlide} />;
			case FurtherActionsEnum.MAIN:
				return <Slide list={furtherActionsMain} handleChangeSlide={handleChangeSlide} />;
			case FurtherActionsEnum.PRACTICE:
				return (
					<Slide
						list={isHome ? furtherActionsPracticeHome : furtherActionsPractice}
						handleChangeSlide={handleChangeSlide}
					/>
				);
			case FurtherActionsEnum.HELP:
				return (
					<Slide
						list={isHome ? furtherActionsHelpHome : furtherActionsHelp}
						handleChangeSlide={handleChangeSlide}
					/>
				);
			default:
				return <></>;
		}
	}, [activeSlide]);

	return (
		<animated.div
			style={{
				opacity: x.to({ range: [0, 1], output: [1, 0] }),
				height: '100%',
				overflow: 'auto',
			}}
		>
			<WithChat title="Что делаем дальше?">{renderElement()}</WithChat>
		</animated.div>
	);
};
