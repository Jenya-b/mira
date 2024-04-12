import { FC } from 'react';

import { WithModal } from '@/hocs/WithModal/WithModal';

import { ButtonOK, ButtonCancel, Title, Subtitle } from './Dialog.styled';

interface DialogProps {
	isOpen: boolean;
	closeModal: () => void;
	handleClickModal: () => void;
}

export const Dialog: FC<DialogProps> = ({ closeModal, isOpen, handleClickModal }) => (
	<WithModal handleClickClose={closeModal} open={isOpen}>
		<>
			<Title>Вы уверены, что хотите отключить уведомления?</Title>
			<Subtitle>
				Обратите внимание, что при отключении уведомлений вы перестанете получать важные
				напоминания, связанные с ключевыми элементами терапии.
			</Subtitle>
			<ButtonOK onClick={handleClickModal}>Отключить уведомления</ButtonOK>
			<ButtonCancel onClick={closeModal}>Назад</ButtonCancel>
		</>
	</WithModal>
);
