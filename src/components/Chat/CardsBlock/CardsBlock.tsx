import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import coverImg from '@/assets/images/cardsSlider/2.png';
import { Cover, InstructionCover } from '@/components/ChatElements/Cards/Cards.styled';
import { Controls } from '@/components/ChatElements/Cards/Controls';
import { Slider } from '@/components/Slider/Slider';
import { furtherActionsList } from '@/constants/chat';
import { path } from '@/router/path';
import { useUpdateUserMutation } from '@/services/api/user';
import { useAppDispatch, useAppSelector } from '@/store';
import { SessionBlocks, setSessionBlock } from '@/store/chat';

import { Container, Wrapper } from './CardsBlock.styled';

export const CardsBlock: FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { isActivePWA } = useAppSelector((state) => state.general);
	const [fetchUpdateUser] = useUpdateUserMutation();

	const handleNavigateByHint = (): void => {
		dispatch(setSessionBlock(SessionBlocks.HOME));
		navigate(path.home);
	};

	const blockHint = (): void => {
		fetchUpdateUser({ training_after_session_passed: true })
			.unwrap()
			.then(handleNavigateByHint)
			.catch(handleNavigateByHint);
	};

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

	const handleNavigate = (): void => {
		if (isActivePWA) {
			dispatch(setSessionBlock(SessionBlocks.HOME));
			navigate(path.home);
		} else {
			navigate(path.therapySettings);
		}
	};

	return (
		<Wrapper>
			<Container>
				<Slider data={furtherActionsList} renderData={renderSliderData} visible />
				<Controls
					btnText1="Продолжить"
					btnText2="Больше не показывать"
					handleClickBtn1={handleNavigate}
					handleClickBtn2={blockHint}
				/>
			</Container>
		</Wrapper>
	);
};
