import { FC } from 'react';

import { WithModal } from '@/hocs/WithModal/WithModal';

import { Button, ButtonSecond, ImageWrap, Subtitle, Title } from './Modal.styled';

interface ModalProps {
	isOpen: boolean;
	closeModal?: () => void;
	handleClickModal: () => void;
	handleClickModalSecond?: () => void;
	title: string;
	subtitle?: string;
	imgSrc: string;
	buttonText: string;
	buttonTextSecond?: string;
}

export const BaseModal: FC<ModalProps> = ({
	closeModal,
	isOpen,
	handleClickModal,
	handleClickModalSecond,
	buttonText,
	buttonTextSecond,
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
			{!!subtitle && <Subtitle>{subtitle}</Subtitle>}
			<Button onClick={handleClickModal}>{buttonText}</Button>
			{!!buttonTextSecond && (
				<ButtonSecond onClick={handleClickModalSecond}>{buttonTextSecond}</ButtonSecond>
			)}
		</>
	</WithModal>
);
