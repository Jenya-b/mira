import { FC, FormEvent, useEffect, useState } from 'react';

import messageImg from '@/assets/images/message.png';
import { BaseModal } from '@/components/Modal/Modal';
import { WithProfile } from '@/hocs/WithProfile/WithProfile';
import { useModal } from '@/hooks/useModal';
import { usePostMessageMutation } from '@/services/api/support';
import { useAppSelector } from '@/store';
import {
	ButtonPrimary,
	InputPrimary,
	LabelPrimary,
	LabelSecondary,
	LabelSelect,
	SelectPrimary,
	Textarea,
} from '@/styles/components';

import { Form, Info } from './InfoRequest.styled';

const InfoRequest: FC = () => {
	const { user } = useAppSelector((state) => state.user);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [text, setText] = useState('');
	const [select, setSelect] = useState('TECHNICAL');
	const [open, openModal, closeModal] = useModal();

	const [fetchPostMessage] = usePostMessageMutation();

	useEffect(() => {
		if (user === null) {
			return;
		}

		setName(user.first_name);
		setEmail(user.email);
	}, [user]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		fetchPostMessage({ content: text, type: select }).unwrap().then(openModal);
	};

	const handleClickModal = (): void => {
		closeModal();
	};

	return (
		<WithProfile
			userName={name}
			subtitle="Если у вас есть вопросы, напишите нам и мы постараемся помочь."
		>
			<>
				<Form onSubmit={handleSubmit}>
					<LabelSelect>
						<span>Тема</span>
						<SelectPrimary value={select} onChange={(e) => setSelect(e.target.value)}>
							<option value="TECHNICAL">Техническая проблема</option>
							<option value="err">Ошибка</option>
						</SelectPrimary>
						<svg width="11" height="6" viewBox="0 0 11 6" fill="none">
							<path
								d="M9.23442 0.117212C9.09443 0.0472145 8.92535 0.0746526 8.81467 0.185329L5.50713 3.49287C5.36512 3.63488 5.13488 3.63488 4.99287 3.49287L1.68533 0.185329C1.57465 0.0746522 1.40557 0.0472142 1.26558 0.117212L0.451255 0.524373C0.229256 0.635372 0.181242 0.931243 0.356748 1.10675L4.99287 5.74287C5.13488 5.88488 5.36512 5.88488 5.50713 5.74287L10.1433 1.10675C10.3188 0.931243 10.2707 0.635373 10.0487 0.524373L9.23442 0.117212Z"
								fill="#1E1E1E"
							/>
						</svg>
					</LabelSelect>
					<LabelPrimary>
						<span>Электронная почта</span>
						<InputPrimary value={email} onChange={(e) => setEmail(e.target.value)} />
					</LabelPrimary>
					<LabelSecondary>
						<span>Обращение</span>
						<Textarea value={text} onChange={(e) => setText(e.target.value)} />
					</LabelSecondary>
					<ButtonPrimary>Отправить запрос</ButtonPrimary>
					<Info>Ответ будет отправлен на указанную почту.</Info>
				</Form>
				<BaseModal
					buttonText="Назад"
					title="Обращение успешно отправлено!"
					subtitle="Ответ будет направлен
на указанную почту."
					imgSrc={messageImg}
					handleClickModal={handleClickModal}
					isOpen={open}
					closeModal={closeModal}
				/>
			</>
		</WithProfile>
	);
};

export default InfoRequest;
