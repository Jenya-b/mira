import { FC } from 'react';

import smile from '@/assets/images/smile1.png';
import { ButtonPrimary } from '@/styles/components';

import { OtherErrorWrap } from './styles';

interface OtherErrorProps {
	handleNavigate: () => void;
}

export const OtherError: FC<OtherErrorProps> = ({ handleNavigate }) => (
	<OtherErrorWrap>
		<img src={smile} alt="" />
		<h1>Извините, у нас что-то пошло не так</h1>
		<h2>Администратор получил уведомление об этом и уже разбирается в ситуации.</h2>
		<ButtonPrimary onClick={handleNavigate}>Вернуться на главную</ButtonPrimary>
	</OtherErrorWrap>
);
