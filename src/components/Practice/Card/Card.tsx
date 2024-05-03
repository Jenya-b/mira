import { FC, useEffect, useRef, useState } from 'react';

import { useResize } from '@/hooks/useResize';
import { useAppSelector } from '@/store';

import {
	Button1,
	Button2,
	Button3,
	Button4,
	Controls,
	Date,
	Favorites,
	Info,
	Wrapper,
} from './Card.styled';

interface CardProps {
	btnText1: string;
	btnText2: string;
	btnText3: string;
	btnText4: string;
	date: string;
	favorites: boolean;
	isTraining?: boolean;
}

export const Card: FC<CardProps> = ({
	btnText1,
	btnText2,
	btnText3,
	btnText4,
	date,
	favorites,
	isTraining = false,
}) => {
	const btnRef = useRef<HTMLButtonElement>(null);
	const [activeText, setActiveText] = useState(false);
	const [innerWidth] = useResize();
	const { cardTrainingBlock } = useAppSelector((state) => state.practice);

	useEffect(() => {
		if (btnRef.current) {
			const text = btnRef.current.textContent as string;
			const span = document.createElement('span');
			span.textContent = text;
			btnRef.current.innerHTML = '';
			btnRef.current.appendChild(span);

			if (span.getClientRects().length > 2 && !activeText) {
				btnRef.current.textContent = `${text.slice(0, innerWidth < 400 ? 50 : 60)}...`;
			} else {
				btnRef.current.textContent = btnText3;
			}
		}
	}, [activeText]);

	return (
		<Wrapper>
			<Info>
				<Date>{date}</Date>
				<Favorites className={favorites ? 'favorites' : ''}>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<g clipPath="url(#clip0_1534_5634)">
							<path
								d="M15.957 6.12686C15.8337 5.74744 15.4655 5.48666 14.9467 5.41131L10.8326 4.81343L8.99273 1.08543C8.76069 0.615332 8.39888 0.345703 7.99999 0.345703C7.60111 0.345703 7.23929 0.615332 7.00729 1.08543L5.16748 4.8134L1.05332 5.41128C0.534503 5.48663 0.166278 5.74744 0.042995 6.12679C-0.0802569 6.50617 0.0643703 6.93359 0.43972 7.2995L3.41674 10.2013L2.71394 14.2989C2.62154 14.8379 2.77848 15.1602 2.92645 15.3357C3.09951 15.5409 3.35198 15.654 3.63736 15.654C3.85312 15.654 4.0829 15.5907 4.32019 15.4659L7.99999 13.5313L11.6798 15.4658C11.9171 15.5906 12.1469 15.6539 12.3627 15.6539H12.3627C12.6482 15.6539 12.9006 15.5409 13.0737 15.3356C13.2216 15.1602 13.3786 14.8378 13.2862 14.2988L12.5833 10.2013L15.5603 7.29956C15.9357 6.93365 16.0803 6.50621 15.957 6.12686Z"
								fill={favorites ? '#FFD600' : '#ABADCB'}
							/>
						</g>
						<defs>
							<clipPath id="clip0_1534_5634">
								<rect width="16" height="16" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<span>{favorites ? '' : 'В избранное'}</span>
				</Favorites>
			</Info>
			<Controls>
				<Button1 className={isTraining && cardTrainingBlock === 1 ? 'training' : ''}>
					{btnText1}
				</Button1>
				<Button2 className={isTraining && cardTrainingBlock === 2 ? 'training' : ''}>
					{btnText2}
				</Button2>
				<Button3
					className={isTraining && cardTrainingBlock === 3 ? 'training' : ''}
					onClick={() => setActiveText(!activeText)}
					ref={btnRef}
				>
					{btnText3}
				</Button3>
				<Button4 className={isTraining && cardTrainingBlock === 4 ? 'training' : ''}>
					{btnText4}
				</Button4>
			</Controls>
		</Wrapper>
	);
};
