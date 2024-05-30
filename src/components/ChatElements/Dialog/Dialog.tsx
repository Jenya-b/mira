/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';

import { WithModal } from '@/hocs/WithModal/WithModal';

import { Button, Content, Title } from './Dialog.styled';

interface DialogSlideProps {
	open: boolean;
	handleClickClose: () => void;
	content: string[];
}

export const DialogSlide: FC<DialogSlideProps> = ({ handleClickClose, open, content }) => (
	<WithModal open={open} handleClickClose={handleClickClose}>
		<>
			<Title>{content[0] ?? ''}</Title>
			<Content> {content[1] ?? ''}</Content>
			<Button onClick={handleClickClose}>Понятно, назад</Button>
		</>
	</WithModal>
);
