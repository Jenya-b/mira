import { animated, useSpring } from '@react-spring/web';
import { FC, useCallback, useState } from 'react';

import {
	FurtherActionsEnum,
	furtherActionsHelp,
	furtherActionsHelpHome,
	furtherActionsMain,
	furtherActionsPractice,
	furtherActionsPracticeHome,
	homeActions,
} from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { useCreateSessionMutation } from '@/services/api/session';
import { useLazyGetUserQuery } from '@/services/api/user';
import { useAppDispatch } from '@/store';
import { SessionBlocks, setIsButtonsBlock, setSessionBlock } from '@/store/chat';

import { Slide } from './Slide';

interface FurtherActionsBlockProps {
	isHome?: boolean;
}

export const FurtherActionsBlock: FC<FurtherActionsBlockProps> = ({ isHome = false }) => {
	const dispatch = useAppDispatch();
	const [activeSlide, setActiveSlide] = useState<FurtherActionsEnum>(FurtherActionsEnum.HOME);
	const [animation, setAnimation] = useState(false);
	const [fetchCreateSession] = useCreateSessionMutation();
	const [fetchGetUser] = useLazyGetUserQuery();

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

	const createSession = (): void => {
		fetchCreateSession(null)
			.unwrap()
			.then(() => {
				fetchGetUser(null);
				dispatch(setIsButtonsBlock(false));
			})
			.catch((error) => {
				if (error.status === 422 && error.data.length) {
					dispatch(setSessionBlock(SessionBlocks.END_SESSION));
				}
			});
	};

	const renderElement = useCallback((): JSX.Element => {
		switch (activeSlide) {
			case FurtherActionsEnum.HOME:
				return (
					<Slide
						list={homeActions.slice(1)}
						handleChangeSlide={handleChangeSlide}
						createSession={createSession}
					/>
				);
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
