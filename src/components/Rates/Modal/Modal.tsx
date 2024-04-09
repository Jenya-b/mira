import { FC } from 'react';

import smile from '@/assets/images/smile-confetti.png';
import { WithModal } from '@/hocs/WithModal/WithModal';

import { Button, ImageWrap, Subtitle, Title } from './Modal.styled';

interface ModalProps {
	closeModal: () => void;
	isOpen: boolean;
}

export const Modal: FC<ModalProps> = ({ closeModal, isOpen }) => (
	<WithModal handleClickClose={closeModal} open={isOpen}>
		<>
			<ImageWrap>
				<img src={smile} alt="" />
			</ImageWrap>

			<Title>Вы успешно приобрели пакет из 7 сессий!</Title>
			<Subtitle>Теперь вы можете продолжить общение с Мирой. </Subtitle>
			<Button onClick={closeModal}>Отлично!</Button>
		</>
	</WithModal>
);
