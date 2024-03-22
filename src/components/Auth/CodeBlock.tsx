import { Dispatch, FC, SetStateAction } from 'react';

import { AuthEnum } from '@/pages/Auth/Auth';

import {
	ButtonPrimary,
	Controls,
	Form,
	InfoBlock,
	Input,
	Label,
	NumberInfo,
	Subtitle,
	Timer,
	Title,
} from './index.styled';

interface CodeBlockProps {
	phoneNumber: string;
	codeNumber: string;
	setCodeNumber: Dispatch<SetStateAction<string>>;
	setAuthParam: Dispatch<SetStateAction<AuthEnum>>;
}

export const CodeBlock: FC<CodeBlockProps> = ({
	phoneNumber,
	codeNumber,
	setCodeNumber,
	setAuthParam,
}) => (
	<Form>
		<InfoBlock>
			<Title>Введите код</Title>
			<Subtitle>Мы выслали вам код по номеру</Subtitle>
			<NumberInfo>
				<p>{phoneNumber}</p>{' '}
				<button onClick={() => setAuthParam(AuthEnum.PHONE)}>Изменить номер</button>
			</NumberInfo>
		</InfoBlock>
		<Controls>
			<Label>
				<span>Код</span>
				<Input value={codeNumber} onChange={(e) => setCodeNumber(e.target.value)} />
			</Label>
			<Timer style={{ marginTop: '-0.5rem' }}>
				Отправить повторное СМС через <span>0:53</span>
			</Timer>
			<ButtonPrimary onClick={() => setAuthParam(AuthEnum.EMAIL)}>Подтвердить</ButtonPrimary>
		</Controls>
	</Form>
);
