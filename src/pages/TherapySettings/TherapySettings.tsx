import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import modalImg from '@/assets/images/phoneForModal.png';
import { BaseModal } from '@/components/Modal/Modal';
import { Card } from '@/components/TherapySettings/Card/Card';
import { InstructionModal } from '@/components/TherapySettings/InstructionModal/InstructionModal';
import { dataAndroid, dataIos } from '@/constants/installPWA';
import { defaultNotificationData } from '@/constants/pushNotification';
import { newThroughPeriods, practicePeriods } from '@/constants/settings';
import { useModal } from '@/hooks/useModal';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { useResize } from '@/hooks/useResize';
import { path } from '@/router/path';
import { useGetNotificationQuery, useUpdateNotificationMutation } from '@/services/api/user';
import { useAppSelector } from '@/store';
import { DeviceTypeEnum } from '@/store/general';
import { Subscription } from '@/store/user';
import { ButtonPrimary } from '@/styles/components';

import {
	CardsWrap,
	Container,
	Reminder,
	StyledSwitch,
	TitleBlock,
	Wrapper,
} from './TherapySettings.styled';

const TherapySettings: FC = () => {
	const navigate = useNavigate();
	const [activeSettings, setActiveSettings] = useState(false);
	const [activeSubmitBtn, setActiveSubmitBtn] = useState(false);
	const [newNotificationData, setNewNotificationData] =
		useState<Subscription>(defaultNotificationData);
	const [isOpenInstallModal, openInstallModal, closeInstallModal] = useModal();
	const [isOpenInstructionModal, openInstructionModal] = useModal();
	const { prompt, isActivePWA, isMobileDevice, deviceType } = useAppSelector(
		(state) => state.general
	);
	const { notificationData } = useAppSelector((state) => state.user);
	const [innerWidth] = useResize();
	const { onClickSusbribeToPushNotification, userSubscription } = usePushNotifications();
	const [updatePushData] = useUpdateNotificationMutation();
	useGetNotificationQuery(null);

	useEffect(() => {
		if (
			!(
				notificationData?.new_thoughts_days === newNotificationData.new_thoughts_days &&
				notificationData?.new_through_time === newNotificationData.new_through_time &&
				notificationData?.practice_days === newNotificationData.practice_days &&
				notificationData?.practice_time === newNotificationData.practice_time
			)
		) {
			setActiveSubmitBtn(true);
		} else {
			setActiveSubmitBtn(false);
		}
	}, [notificationData, newNotificationData]);

	useEffect(() => {
		if (notificationData === null) {
			return;
		}

		setNewNotificationData(notificationData);
	}, [notificationData]);

	useEffect(() => {
		if (userSubscription !== null) {
			setActiveSettings(true);
		}
	}, [userSubscription]);

	useEffect(() => {
		if (!isActivePWA) {
			openInstallModal();
		}
	}, [isMobileDevice, isActivePWA]);

	const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const { checked } = event.target;

		if (!isMobileDevice) {
			return;
		}

		if (checked) {
			setActiveSettings(checked);
			onClickSusbribeToPushNotification();
		}
	};

	const handleClickModal = (): void => {
		if (prompt) {
			prompt.prompt();
		} else if (deviceType !== DeviceTypeEnum.DESKTOP) {
			closeInstallModal();
			openInstructionModal();
		}
	};

	const handleNavigate = (): void => {
		navigate(path.home);
	};

	const handleNewThoughTime = (e: ChangeEvent<HTMLInputElement>): void => {
		setNewNotificationData((state) => ({ ...state, new_through_time: e.target.value }));
	};

	const handlePracticeTime = (e: ChangeEvent<HTMLInputElement>): void => {
		setNewNotificationData((state) => ({ ...state, practice_time: e.target.value }));
	};

	const handleNewThoughDays = (e: ChangeEvent<HTMLSelectElement>): void => {
		setNewNotificationData((state) => ({ ...state, new_thoughts_days: Number(e.target.value) }));
	};

	const handlePracticeDays = (e: ChangeEvent<HTMLSelectElement>): void => {
		setNewNotificationData((state) => ({ ...state, new_thoughts_days: Number(e.target.value) }));
	};

	const handleSubmit = (): void => {
		updatePushData({
			new_thoughts_days: newNotificationData.new_thoughts_days,
			new_through_time: newNotificationData.new_through_time,
			practice_days: newNotificationData.practice_days,
			practice_time: newNotificationData.practice_time,
		});
	};

	return (
		<Wrapper>
			{isMobileDevice ? (
				<BaseModal
					buttonText="Установить"
					buttonTextSecond="Пропустить"
					isOpen={isOpenInstallModal}
					title="Для настройки терапии установите приложение"
					imgSrc={modalImg}
					handleClickModal={handleClickModal}
					handleClickModalSecond={handleNavigate}
				/>
			) : (
				<BaseModal
					buttonText="Перейти на главную"
					isOpen={isOpenInstallModal}
					title="Настройка терапии"
					subtitle="Для настройки терапии перейдите в мобильное устройство и установите приложение."
					imgSrc={modalImg}
					handleClickModal={handleNavigate}
				/>
			)}
			<InstructionModal
				isOpen={isOpenInstructionModal}
				data={deviceType === DeviceTypeEnum.IOS ? dataIos : dataAndroid}
			/>
			<Container>
				<TitleBlock>
					<h2>Настройки терапии</h2>
					<StyledSwitch
						checked={activeSettings}
						onChange={handleSwitchChange}
						name="transaction"
						inputProps={{ 'aria-label': 'ant design' }}
						disabled={userSubscription !== null}
					/>
				</TitleBlock>
				{activeSubmitBtn && <Reminder>Есть несохраненные изменения</Reminder>}

				<CardsWrap style={{ opacity: activeSettings ? 1 : 0.3 }}>
					<Card
						title="Новые мысли"
						subtitle="Регулярный просмотр новых мыслей поможет им укрепиться и стать основой вашего мышления."
						activeSettings={activeSettings}
						time={newNotificationData.new_through_time}
						days={newNotificationData.new_thoughts_days}
						handleChangeTime={handleNewThoughTime}
						handleChangeDays={handleNewThoughDays}
						periods={newThroughPeriods}
					/>
					<Card
						title="Практика"
						subtitle="Осмысление и анализ происходящих событий — это ключ к изменению вашего образа мышления."
						activeSettings={activeSettings}
						time={newNotificationData.practice_time}
						days={newNotificationData.practice_days}
						handleChangeTime={handlePracticeTime}
						handleChangeDays={handlePracticeDays}
						periods={practicePeriods}
					/>
				</CardsWrap>
				{activeSubmitBtn && (
					<div style={{ marginTop: '0.71rem' }}>
						<ButtonPrimary onClick={handleSubmit}>Сохранить</ButtonPrimary>
					</div>
				)}
				{innerWidth <= 1000 && (
					<div style={{ marginTop: '0.71rem' }}>
						<ButtonPrimary onClick={() => navigate(path.home)}>На главную</ButtonPrimary>
					</div>
				)}
			</Container>
		</Wrapper>
	);
};

export default TherapySettings;
