import { useSpring } from '@react-spring/web';
import { FC, useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

import miraIcon from '@/assets/images/icons/logo-chat.svg';
import miraCheckIcon from '@/assets/images/icons/logo-chat2.svg';
import userIcon from '@/assets/images/icons/logo-chat3.svg';
import { useAppDispatch } from '@/store';
import { setTypingComplete } from '@/store/chat';

import { Logo, Text, Wrapper } from './WithMessage.styled';

export enum PersonMessage {
	MIRA_MAIN = 'mira',
	MIRA_CHECK = 'mira-check',
	USER = 'user',
}

interface WithMessageProps {
	logoParam: PersonMessage;
	text: string;
	children?: JSX.Element;
	newMessage?: boolean;
}

export const WithMessage: FC<WithMessageProps> = ({
	logoParam,
	text,
	children,
	newMessage = false,
}) => {
	const dispatch = useAppDispatch();
	const el = useRef(null);
	const typed = useRef<Typed | null>(null);
	const [isTyping, setIsTyping] = useState(false);

	const props = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	useEffect(() => {
		if (typed === null || !newMessage) {
			return;
		}

		const options = {
			strings: [
				`${text
					.split('\n')
					.map((item) => `<p>${item}</p>`)
					.join('')}`,
			],
			typeSpeed: 15,
			backSpeed: 0,
			cursorChar: '',
			loop: false,
		};

		typed.current = new Typed(el.current, {
			...options,
			onBegin() {
				dispatch(setTypingComplete(false));

				if (logoParam !== PersonMessage.MIRA_CHECK) {
					setTimeout(() => dispatch(setTypingComplete(true)), 2000);
				}
				setIsTyping(false);
			},
			onComplete() {
				if (logoParam === PersonMessage.MIRA_CHECK) {
					dispatch(setTypingComplete(true));
				}
				setIsTyping(true);
			},
		});

		// eslint-disable-next-line consistent-return
		return () => {
			if (typed.current) {
				typed.current.destroy();
			}
		};
	}, []);

	return (
		<Wrapper style={props} className={logoParam}>
			<Logo className={logoParam}>
				<img
					src={
						logoParam === PersonMessage.MIRA_MAIN
							? miraIcon
							: logoParam === PersonMessage.MIRA_CHECK
								? miraCheckIcon
								: userIcon
					}
					alt="logo"
				/>
			</Logo>
			<Text className={logoParam} ref={el}>
				{!newMessage && text.split('\n').map((item, i) => <p key={i}>{item}</p>)}
			</Text>
			{newMessage && !isTyping ? <></> : children}
		</Wrapper>
	);
};
