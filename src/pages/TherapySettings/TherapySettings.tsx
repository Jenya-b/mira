import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import modalImg from '@/assets/images/phoneForModal.png';
import { BaseModal } from '@/components/Modal/Modal';
import { Card } from '@/components/TherapySettings/Card/Card';
import { useModal } from '@/hooks/useModal';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { useResize } from '@/hooks/useResize';
import { path } from '@/router/path';
import { useAppSelector } from '@/store';
import { ButtonPrimary } from '@/styles/components';

import {
	CardsWrap,
	Container,
	Controls,
	StyledSwitch,
	TitleBlock,
	Wrapper,
} from './TherapySettings.styled';

const TherapySettings: FC = () => {
	const navigate = useNavigate();
	const [activeSettings, setActiveSettings] = useState(false);
	const [isMobileDevice, setIsMobileDevice] = useState(false);
	const [isOpenModal, openModal, closeModal] = useModal();
	const [isOpenModal2, openModal2, closeModal2] = useModal();
	const [innerWidth] = useResize();
	const { onClickSusbribeToPushNotification, userSubscription } = usePushNotifications();
	const { prompt, isActivePWA } = useAppSelector((state) => state.notification);

	const getInstalledRelatedApps = async (): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const relatedApps = await (navigator as any).getInstalledRelatedApps();
		const PWAisInstalled = relatedApps.length > 0;
		console.log(PWAisInstalled);
	};

	useEffect(() => {
		const regexp =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;

		if (regexp.test(navigator.userAgent)) {
			setIsMobileDevice(true);
		} else {
			setIsMobileDevice(false);
		}

		getInstalledRelatedApps();
	}, []);

	useEffect(() => {
		if (userSubscription !== null) {
			setActiveSettings(true);
		}
	}, [userSubscription]);

	useEffect(() => {
		closeModal();
		closeModal2();

		if (isMobileDevice && !isActivePWA) {
			openModal();
		} else if (!isMobileDevice) {
			openModal2();
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
			prompt?.prompt();
		}
	};

	const handleNavigate = (): void => {
		navigate(path.home);
	};

	return (
		<Wrapper>
			<BaseModal
				buttonText="Установить"
				buttonTextSecond="Пропустить"
				isOpen={isOpenModal}
				title="Для настройки терапии установите приложение"
				imgSrc={modalImg}
				handleClickModal={handleClickModal}
				handleClickModalSecond={handleNavigate}
			/>
			<BaseModal
				buttonText="Перейти на главную"
				isOpen={isOpenModal2}
				title="Настройка терапии"
				subtitle="Для настройки терапии перейдите в мобильное устройство и установите приложение."
				imgSrc={modalImg}
				handleClickModal={handleNavigate}
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
				<Controls style={{ opacity: activeSettings ? 1 : 0.3 }}>
					<button>Рекомендованная</button>
					<button>Пользовательская</button>
				</Controls>
				<CardsWrap style={{ opacity: activeSettings ? 1 : 0.3 }}>
					<Card
						title="Новые мысли"
						subtitle="Регулярный просмотр новых мыслей поможет им укрепиться и стать основой вашего мышления."
						activeSettings={activeSettings}
					/>
					<Card
						title="Вечерняя практика"
						subtitle="Осмысление и анализ происходящих событий — это ключ к изменению вашего образа мышления."
						activeSettings={activeSettings}
					/>
				</CardsWrap>
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
