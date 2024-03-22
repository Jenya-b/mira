import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { AuthEnum, setAuthParam, setCodeNumber } from '@/store/auth';

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
	const { phoneNumber, codeNumber } = useAppSelector((state) => state.auth);

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
				<Label>
					<span>Код</span>
					<Input value={codeNumber} onChange={(e) => dispatch(setCodeNumber(e.target.value))} />
				</Label>
				<Timer style={{ marginTop: '-0.5rem' }}>
					Отправить повторное СМС через <span>0:53</span>
				</Timer>
				<ButtonPrimary onClick={() => dispatch(setAuthParam(AuthEnum.EMAIL))}>
					Подтвердить
				</ButtonPrimary>
			</Controls>
		</Wrapper>
	);
};
