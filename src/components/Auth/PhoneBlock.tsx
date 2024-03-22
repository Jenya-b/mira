import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { AuthEnum, setAuthParam, setPhoneNumber } from '@/store/auth';

import {
	ButtonPrimary,
	Controls,
	Wrapper,
	InfoBlock,
	Label,
	StyledInputMask,
	Subtitle,
	Title,
} from './index.styled';

export const PhoneBlock: FC = () => {
	const dispatch = useAppDispatch();
	const { phoneNumber } = useAppSelector((state) => state.auth);

	return (
		<Wrapper>
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
						onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
					/>
				</Label>
				<ButtonPrimary onClick={() => dispatch(setAuthParam(AuthEnum.COD))}>
					Получить код
				</ButtonPrimary>
			</Controls>
		</Wrapper>
	);
};
