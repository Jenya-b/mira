import { FC } from 'react';

import messageIcon from '@/assets/images/icons/bubble-message.svg';
import { randomHints } from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { useAppDispatch } from '@/store';
import { setInputValue } from '@/store/chat';

import { List } from './FirstBlock.styled';

export const FirstBlock: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<WithChat title="Что у вас случилось?">
			<List>
				{randomHints.map((item) => (
					<li key={item}>
						<button onClick={() => dispatch(setInputValue(item))}>{item}</button>
					</li>
				))}
				<li>
					<button>
						<img src={messageIcon} alt="" />
						<span>Любая ситуация из вашей жизни</span>
					</button>
				</li>
			</List>
		</WithChat>
	);
};
