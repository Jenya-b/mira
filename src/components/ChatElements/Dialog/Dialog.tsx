/* eslint-disable react/no-unescaped-entities */
import { styled } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { FC, forwardRef } from 'react';

import { Button, Content, Title } from './Dialog.styled';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialog-container': {
		[theme.breakpoints.down('sm')]: {
			alignItems: 'end',
		},
	},
	'& .MuiDialog-paper': {
		margin: 0,
		borderRadius: '2.14286rem',
		background: '#488CE1',
		maxWidth: '30rem',
		width: '100%',
		padding: '3.79rem 2.29rem 2.71rem 2.29rem',

		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%',
			borderBottomLeftRadius: 0,
			borderBottomRightRadius: 0,
			padding: '3.43rem 1.43rem 0.64rem 1.43rem',
		},
	},
	'.MuiBackdrop-root': {
		background: 'rgba(0, 0, 0, 0.35)',
		backdropFilter: 'blur(5px)',
	},
}));

const Transition = forwardRef(
	(
		props: TransitionProps & {
			children: React.ReactElement;
		},
		ref: React.Ref<unknown>
	) => <Slide direction="up" ref={ref} {...props} />
);

interface DialogSlideProps {
	open: boolean;
	handleClickClose: () => void;
}

export const DialogSlide: FC<DialogSlideProps> = ({ handleClickClose, open }) => (
	<StyledDialog
		open={open}
		TransitionComponent={Transition}
		keepMounted
		onClose={handleClickClose}
		aria-describedby="alert-dialog-slide-description"
	>
		<Title>Долженствование</Title>
		<Content>
			{' '}
			Накладывание строгих, часто нереальных стандартов на себя или других, обычно с использованием
			слов "должен" или "необходимо".
		</Content>
		<Button onClick={handleClickClose}>Понятно, назад</Button>
	</StyledDialog>
);
