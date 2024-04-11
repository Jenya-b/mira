import { FC } from 'react';

import { WithModal } from '@/hocs/WithModal/WithModal';

import { ButtonOK, ButtonCancel, Title } from './Dialog.styled';

interface DialogProps {
	isOpen: boolean;
	closeModal: () => void;
	handleClickModal: () => void;
}

export const Dialog: FC<DialogProps> = ({ closeModal, isOpen, handleClickModal }) => (
	<WithModal handleClickClose={closeModal} open={isOpen}>
		<>
			<Title>Вы действительно хотите удалить аккаунт?</Title>
			<ButtonOK onClick={handleClickModal}>Да, удалить аккаунт</ButtonOK>
			<ButtonCancel onClick={closeModal}>Нет, вернуться назад</ButtonCancel>
		</>
	</WithModal>
);
