import { FC } from 'react';

import messageIcon from '@/assets/images/message2.png';
import { BaseModal } from '@/components/Modal/Modal';
import { randomHints } from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { useModal } from '@/hooks/useModal';
import { useAppDispatch } from '@/store';
import { setInputValue } from '@/store/chat';

import { List } from './FirstBlock.styled';

export const FirstBlock: FC = () => {
	const dispatch = useAppDispatch();
	const [isOpen, openModal, closeModal] = useModal();

	return (
		<WithChat title="Что у вас случилось?">
			<>
				<List>
					{randomHints.map((item) => (
						<li key={item}>
							<button onClick={() => dispatch(setInputValue(item))}>{item}</button>
						</li>
					))}
					<li>
						<button onClick={openModal}>
							<span>Любая ситуация из вашей жизни</span>
						</button>
					</li>
				</List>
				<BaseModal
					buttonText="Продолжить"
					title="Любая ситуация из вашей жизни"
					subtitle="Опишите своими словами, что вас беспокоит, в поле для сообщений. Вместе мы найдем путь к решению."
					imgSrc={messageIcon}
					handleClickModal={closeModal}
					isOpen={isOpen}
					closeModal={closeModal}
				/>
			</>
		</WithChat>
	);
};
