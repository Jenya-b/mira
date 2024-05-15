import { FC } from 'react';

import { ButtonPrimary } from '@/styles/components';

import { ErrorType, NotFoundWrap } from './styles';

interface NotFoundProps {
	handleNavigate: () => void;
}

export const NotFound: FC<NotFoundProps> = ({ handleNavigate }) => (
	<NotFoundWrap>
		<ErrorType>
			<p>40</p>
			<p>4</p>
		</ErrorType>
		<h1>Упс, кажется, мысль завела не туда</h1>
		<h2>Страница не найдена, или она была удалена</h2>
		<ButtonPrimary onClick={handleNavigate}>Вернуться на главную</ButtonPrimary>
	</NotFoundWrap>
);
