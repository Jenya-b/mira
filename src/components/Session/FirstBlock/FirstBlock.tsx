import { FC, useEffect, useState } from 'react';

import messageIcon from '@/assets/images/message2.png';
import { BaseModal } from '@/components/Modal/Modal';
import { randomHints } from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { useModal } from '@/hooks/useModal';
import { useAppDispatch } from '@/store';
import { setInputValue } from '@/store/chat';
import { getRandomElements } from '@/utils/randomElements';

import { List } from './FirstBlock.styled';

export const FirstBlock: FC = () => {
	const dispatch = useAppDispatch();
	const [isOpen, openModal, closeModal] = useModal();
	const [elements, setElements] = useState<string[]>([]);

	useEffect(() => {
		const randomElem = getRandomElements(randomHints, 4);
		setElements(randomElem);
	}, []);

	return (
		<WithChat title="Что у вас случилось?">
			<>
				<List>
					{elements.map((item) => (
						<li key={item}>
							<button onClick={() => dispatch(setInputValue(item))}>{item}</button>
						</li>
					))}
					<li>
						<button onClick={openModal}>
							<span>У меня другая ситуация</span>
						</button>
					</li>
				</List>
				<BaseModal
					buttonText="Продолжить"
					title="Любая ситуация из вашей жизни"
					subtitle="Опишите своими словами, что вас беспокоит, в поле для сообщений."
					imgSrc={messageIcon}
					handleClickModal={closeModal}
					isOpen={isOpen}
					closeModal={closeModal}
				/>
			</>
		</WithChat>
	);
};
