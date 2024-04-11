import { FC } from 'react';

import { WithModal } from '@/hocs/WithModal/WithModal';

import { Button, ImageWrap, Subtitle, Title } from './Modal.styled';

interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;
	handleClickModal: () => void;
	title: string;
	subtitle: string;
	imgSrc: string;
	buttonText: string;
}

export const BaseModal: FC<ModalProps> = ({
	closeModal,
	isOpen,
	handleClickModal,
	buttonText,
	imgSrc,
	subtitle,
	title,
}) => (
	<WithModal handleClickClose={closeModal} open={isOpen}>
		<>
			<ImageWrap>
				<img src={imgSrc} alt="" />
			</ImageWrap>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Button onClick={handleClickModal}>{buttonText}</Button>
		</>
	</WithModal>
);
