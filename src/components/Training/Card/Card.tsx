import { FC } from 'react';

import listIcon from '@/assets/images/icons/list.svg';
import settingsIcon from '@/assets/images/icons/settings.svg';
import { useResize } from '@/hooks/useResize';
import { useUpdateUserMutation } from '@/services/api/user';
import { useAppDispatch } from '@/store';
import { TrainingParam, setTrainingBlock } from '@/store/training';

import { ButtonGroup, ButtonSecondary, Content, TextBlock, Wrapper } from './Card.styled';

export const CardBlock: FC = () => {
	const dispatch = useAppDispatch();
	const [innerWidth] = useResize();
	const [fetchUpdateUser] = useUpdateUserMutation();

	const handleNavigate = (): void => {
		fetchUpdateUser({ training_after_intro_passed: true })
			.unwrap()
			.then(() => dispatch(setTrainingBlock(TrainingParam.MODAL)));
	};

	return (
		<Wrapper>
			<Content>
				{innerWidth <= 1000 && (
					<ButtonGroup>
						<ButtonSecondary>
							<img src={listIcon} alt="list" />
							<p>Карточки</p>
						</ButtonSecondary>
						<ButtonSecondary>
							<img src={settingsIcon} alt="setting" />
							<p>Тренажер</p>
						</ButtonSecondary>
					</ButtonGroup>
				)}

				<TextBlock>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="69"
						height="12"
						viewBox="0 0 69 12"
						fill="none"
					>
						<path
							d="M68 7C68.5523 7 69 6.55228 69 6C69 5.44772 68.5523 5 68 5V7ZM11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6ZM68 5L6 5V7L68 7V5Z"
							fill="white"
						/>
					</svg>
					<p>Быстрый переход к практике КПТ:</p>
					<ul>
						<li>Новые мысли в копинг-карточках</li>
						<li>Виртуальный тренажер</li>
					</ul>
				</TextBlock>
				<button onClick={handleNavigate}>Ок, дальше</button>
			</Content>
		</Wrapper>
	);
};
