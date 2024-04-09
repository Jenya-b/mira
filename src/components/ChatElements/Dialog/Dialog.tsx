/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';

import { WithModal } from '@/hocs/WithModal/WithModal';

import { Button, Content, Title } from './Dialog.styled';

interface DialogSlideProps {
	open: boolean;
	handleClickClose: () => void;
}

export const DialogSlide: FC<DialogSlideProps> = ({ handleClickClose, open }) => (
	<WithModal open={open} handleClickClose={handleClickClose}>
		<>
			<Title>Долженствование</Title>
			<Content>
				{' '}
				Накладывание строгих, часто нереальных стандартов на себя или других, обычно с
				использованием слов "должен" или "необходимо".
			</Content>
			<Button onClick={handleClickClose}>Понятно, назад</Button>
		</>
	</WithModal>
);
