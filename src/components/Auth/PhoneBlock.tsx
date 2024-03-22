import { Dispatch, FC, SetStateAction } from 'react';

import { AuthEnum } from '@/pages/Auth/Auth';

import {
	ButtonPrimary,
	Controls,
	Form,
	InfoBlock,
	Label,
	StyledInputMask,
	Subtitle,
	Title,
} from './index.styled';

interface PhoneBlockProps {
	phoneNumber: string;
	setPhoneNumber: Dispatch<SetStateAction<string>>;
	setAuthParam: Dispatch<SetStateAction<AuthEnum>>;
}

export const PhoneBlock: FC<PhoneBlockProps> = ({ phoneNumber, setPhoneNumber, setAuthParam }) => (
	<Form>
		<InfoBlock>
			<Title>Войти в аккаунт</Title>
			<Subtitle>Введите ваш номер телефона, мы пришлем код подтверждения.</Subtitle>
		</InfoBlock>
		<Controls>
			<Label>
				<span>Номер телефона</span>
				<StyledInputMask
					mask="+7 999 999-99-99"
					maskPlaceholder={null}
					placeholder="+7 000 000-00-00"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
			</Label>
			<ButtonPrimary onClick={() => setAuthParam(AuthEnum.COD)}>Получить код</ButtonPrimary>
		</Controls>
	</Form>
);
