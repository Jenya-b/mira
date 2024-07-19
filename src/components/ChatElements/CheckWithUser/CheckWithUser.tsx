import { FC, useState } from 'react';

import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';
import { useAppDispatch, useAppSelector } from '@/store';
import { setTypingComplete } from '@/store/chat';

import { List } from './CheckWithUser.styled';

const list = ['Теперь сильно сомневаюсь', 'Стал немного сомневаться', 'Мысль также верна'];

export const CheckWithUser: FC = () => {
	const dispatch = useAppDispatch();
	const [active, setActive] = useState<string>('');
	const { typingComplete } = useAppSelector((state) => state.chat);

	const handleTypingComplete = (isTyping: boolean): void => {
		dispatch(setTypingComplete(isTyping));
	};

	return (
		<WithMessage
			logoParam={PersonMessage.MIRA_CHECK}
			text="Насколько вы согласны с моей мыслью?"
			typingComplete={typingComplete}
			handleTypingComplete={handleTypingComplete}
		>
			<List>
				{list.map((item) => (
					<li key={item}>
						<button className={item === active ? 'active' : ''} onClick={() => setActive(item)}>
							{item}
						</button>
					</li>
				))}
			</List>
		</WithMessage>
	);
};
