import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import smile from '@/assets/images/smile1.png';
import { BaseModal } from '@/components/Modal/Modal';
import { Dialog } from '@/components/UserData/Dialog/Dialog';
import { WithProfile } from '@/hocs/WithProfile/WithProfile';
import { useModal } from '@/hooks/useModal';
import { path } from '@/router/path';
import { useAppDispatch, useAppSelector } from '@/store';
import { resetState as resetStateAuth } from '@/store/auth';
import { resetState as resetStateChat } from '@/store/chat';
import { resetState as resetStateUser } from '@/store/user';
import { ButtonPrimary, InputPrimary, LabelPrimary, StyledInputMask } from '@/styles/components';

import { ButtonClose, Form } from './UserData.styled';

const UserData: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { user } = useAppSelector((state) => state.user);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isOpenDialog, , closeDialog] = useModal();
	const [isOpenModal, openModal, closeModal] = useModal();

	useEffect(() => {
		if (user === null) {
			return;
		}

		setName(user.first_name);
		setEmail(user.email);
		setPhoneNumber(String(user.phone));
	}, [user]);

	const logout = (): void => {
		localStorage.removeItem('accessToken');
		dispatch(resetStateAuth());
		dispatch(resetStateChat());
		dispatch(resetStateUser());
		navigate(path.auth);
	};

	const handleDialog = (): void => {
		closeDialog();
		openModal();
	};

	return (
		<WithProfile userName={name} subtitle="Это данные вашего профиля.">
			<>
				<Form>
					<LabelPrimary>
						<span>Имя</span>
						<InputPrimary value={name} onChange={(e) => setName(e.target.value)} />
					</LabelPrimary>
					<LabelPrimary>
						<span>Номер телефона</span>
						<StyledInputMask
							type="tel"
							inputMode="tel"
							mask="+7 999 999-99-99"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</LabelPrimary>
					<LabelPrimary>
						<span>Электронная почта</span>
						<InputPrimary value={email} onChange={(e) => setEmail(e.target.value)} />
					</LabelPrimary>
					<ButtonPrimary>Сохранить изменения</ButtonPrimary>
				</Form>
				<ButtonClose onClick={logout}>
					<span>Выйти</span>
					<svg width="25" height="25" viewBox="0 0 25 25" fill="none">
						<g clipPath="url(#clip0_1441_21273)">
							<path
								d="M12.4602 22.466H3.49002C2.93984 22.466 2.49336 22.0195 2.49336 21.4694V3.52913C2.49336 2.97895 2.93989 2.53247 3.49002 2.53247H12.4602C13.0113 2.53247 13.4568 2.08697 13.4568 1.53581C13.4568 0.984656 13.0113 0.539062 12.4602 0.539062H3.49002C1.84152 0.539062 0.5 1.88063 0.5 3.52913V21.4693C0.5 23.1178 1.84152 24.4593 3.49002 24.4593H12.4602C13.0113 24.4593 13.4568 24.0138 13.4568 23.4627C13.4568 22.9115 13.0113 22.466 12.4602 22.466Z"
								fill="#1E1E1E"
							/>
							<path
								d="M24.2032 11.7905L18.1434 5.81037C17.7527 5.42366 17.1208 5.42867 16.7341 5.82036C16.3474 6.21205 16.3514 6.84294 16.7441 7.22966L21.0746 11.5034H9.47029C8.91913 11.5034 8.47363 11.9489 8.47363 12.5C8.47363 13.0512 8.91913 13.4967 9.47029 13.4967H21.0746L16.7441 17.7705C16.3514 18.1572 16.3484 18.7881 16.7341 19.1798C16.9294 19.3771 17.1866 19.4768 17.4437 19.4768C17.6969 19.4768 17.95 19.3811 18.1434 19.1897L24.2032 13.2096C24.3926 13.0223 24.5002 12.7671 24.5002 12.5C24.5002 12.233 24.3936 11.9788 24.2032 11.7905Z"
								fill="#1E1E1E"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1441_21273">
								<rect width="24" height="24" fill="white" transform="translate(0.5 0.5)" />
							</clipPath>
						</defs>
					</svg>
				</ButtonClose>
				{/* <ButtonDelete onClick={() => openDialog()}>
					<svg width="19" height="19" viewBox="0 0 19 19" fill="none">
						<path
							d="M16.1797 2.22656H13.3965V1.66992C13.3965 0.749127 12.6474 0 11.7266 0H7.27344C6.35264 0 5.60352 0.749127 5.60352 1.66992V2.22656H2.82031C1.89952 2.22656 1.15039 2.97569 1.15039 3.89648C1.15039 4.636 1.63374 5.26437 2.30097 5.48332L3.29383 17.4687C3.36534 18.3274 4.09632 19 4.95796 19H14.042C14.9037 19 15.6347 18.3274 15.7062 17.4685L16.699 5.48328C17.3663 5.26437 17.8496 4.636 17.8496 3.89648C17.8496 2.97569 17.1005 2.22656 16.1797 2.22656ZM6.7168 1.66992C6.7168 1.36299 6.96651 1.11328 7.27344 1.11328H11.7266C12.0335 1.11328 12.2832 1.36299 12.2832 1.66992V2.22656H6.7168V1.66992ZM14.5968 17.3763C14.5729 17.6625 14.3293 17.8867 14.042 17.8867H4.95796C4.67077 17.8867 4.42711 17.6625 4.40332 17.3766L3.42497 5.56641H15.575L14.5968 17.3763ZM16.1797 4.45312H2.82031C2.51338 4.45312 2.26367 4.20342 2.26367 3.89648C2.26367 3.58955 2.51338 3.33984 2.82031 3.33984H16.1797C16.4866 3.33984 16.7363 3.58955 16.7363 3.89648C16.7363 4.20342 16.4866 4.45312 16.1797 4.45312Z"
							fill="#F25050"
						/>
						<path
							d="M7.2724 16.1824L6.71576 7.20191C6.69673 6.89505 6.43114 6.66167 6.12576 6.68078C5.81891 6.69982 5.5856 6.96396 5.6046 7.27078L6.16124 16.2513C6.17953 16.5464 6.4246 16.7735 6.71628 16.7735C7.03865 16.7735 7.29218 16.502 7.2724 16.1824Z"
							fill="#F25050"
						/>
						<path
							d="M9.5 6.67969C9.19259 6.67969 8.94336 6.92891 8.94336 7.23633V16.2168C8.94336 16.5242 9.19259 16.7734 9.5 16.7734C9.80741 16.7734 10.0566 16.5242 10.0566 16.2168V7.23633C10.0566 6.92891 9.80741 6.67969 9.5 6.67969Z"
							fill="#F25050"
						/>
						<path
							d="M12.8743 6.68077C12.5681 6.66174 12.3033 6.89504 12.2843 7.2019L11.7276 16.1824C11.7087 16.4892 11.942 16.7533 12.2488 16.7724C12.5558 16.7914 12.8198 16.558 12.8388 16.2512L13.3954 7.27078C13.4144 6.96392 13.1811 6.69977 12.8743 6.68077Z"
							fill="#F25050"
						/>
					</svg>
					<span>Удалить аккаунт</span>
				</ButtonDelete> */}
				<Dialog isOpen={isOpenDialog} closeModal={closeDialog} handleClickModal={handleDialog} />
				<BaseModal
					buttonText="Назад"
					title="Ваш аккаунт
				успешно удален"
					subtitle="Вы всегда можете зарегистрироваться снова, мы всегда рады помогать."
					imgSrc={smile}
					handleClickModal={() => {}}
					isOpen={isOpenModal}
					closeModal={closeModal}
				/>
			</>
		</WithProfile>
	);
};

export default UserData;
