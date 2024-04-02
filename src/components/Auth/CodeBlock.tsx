import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { path } from '@/router/path';
import { useSigninMutation } from '@/services/api/auth';
import { useAppDispatch, useAppSelector } from '@/store';
import { AuthEnum, resetState, setAuthParam, setCodeNumber } from '@/store/auth';

import {
	ButtonPrimary,
	Controls,
	Wrapper,
	InfoBlock,
	Input,
	Label,
	NumberInfo,
	Subtitle,
	Timer,
	Title,
} from './index.styled';

export const CodeBlock: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { phoneNumber, codeNumber } = useAppSelector((state) => state.auth);
	const [timerNum, setTimerNum] = useState<number>(59);
	const [error, setError] = useState(false);

	const [signinMutation, { data, isError, isSuccess }] = useSigninMutation();

	useEffect(() => {
		if (isSuccess && data) {
			dispatch(resetState());

			if (data.exists_user) {
				navigate(path.home);
			} else {
				dispatch(setAuthParam(AuthEnum.EMAIL));
			}
		}
	}, [isSuccess]);

	useEffect(() => {
		setError(false);
	}, [codeNumber]);

	useEffect(() => {
		if (isError) {
			setError(true);
		}
	}, [isError]);

	const setTimer = (): void => {
		if (timerNum > 0) {
			setTimerNum(timerNum - 1);
		}
	};

	useEffect(() => {
		const timer = setTimeout(setTimer, 1000);

		return () => clearTimeout(timer);
	}, [timerNum]);

	const handleSubmit = (): void => {
		const phone = Number(phoneNumber.replace(/[^0-9]/g, ''));
		signinMutation({ phone, code: Number(codeNumber) });
	};

	return (
		<Wrapper>
			<InfoBlock>
				<Title>Введите код</Title>
				<Subtitle>Мы выслали вам код по номеру</Subtitle>
				<NumberInfo>
					<p>{phoneNumber}</p>{' '}
					<button onClick={() => dispatch(setAuthParam(AuthEnum.PHONE))}>Изменить номер</button>
				</NumberInfo>
			</InfoBlock>
			<Controls>
				<Label className={error ? 'error' : ''}>
					<span>Код</span>
					{error && <span>Неверный код</span>}
					<Input
						type="number"
						value={codeNumber}
						onChange={(e) => dispatch(setCodeNumber(e.target.value))}
					/>
				</Label>
				<Timer style={{ marginTop: '-0.5rem' }}>
					{timerNum > 0 && (
						<>
							Отправить повторное СМС через{' '}
							<span>0:{timerNum >= 10 ? timerNum : `0${timerNum}`}</span>
						</>
					)}
				</Timer>
				<ButtonPrimary disabled={error} onClick={handleSubmit}>
					Подтвердить
				</ButtonPrimary>
			</Controls>
		</Wrapper>
	);
};
