import { FC, useEffect } from 'react';

import { useCreateCodeMutation } from '@/services/api/auth';
import { useAppDispatch, useAppSelector } from '@/store';
import { AuthEnum, setAuthParam, setPhoneNumber } from '@/store/auth';
import { ButtonPrimary } from '@/styles/components';

import {
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

	const [createCodeMutation, { isSuccess }] = useCreateCodeMutation();

	useEffect(() => {
		if (isSuccess) {
			dispatch(setAuthParam(AuthEnum.COD));
		}
	}, [isSuccess]);

	const handleSubmit = (): void => {
		const phone = Number(phoneNumber.replace(/[^0-9]/g, ''));
		createCodeMutation({ phone });
	};

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
						type="tel"
						inputMode="tel"
						mask="+7 999 999-99-99"
						placeholder="+7 000 000-00-00"
						value={phoneNumber}
						onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
					/>
				</Label>
				<ButtonPrimary onClick={handleSubmit}>Получить код</ButtonPrimary>
			</Controls>
		</Wrapper>
	);
};
