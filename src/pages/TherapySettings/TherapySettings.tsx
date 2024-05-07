import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import modalImg from '@/assets/images/phoneForModal.png';
import { BaseModal } from '@/components/Modal/Modal';
import { Card } from '@/components/TherapySettings/Card/Card';
import { InstructionModal } from '@/components/TherapySettings/InstructionModal/InstructionModal';
import { dataAndroid, dataIos } from '@/constants/installPWA';
import { useModal } from '@/hooks/useModal';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { useResize } from '@/hooks/useResize';
import { path } from '@/router/path';
import { useAppSelector } from '@/store';
import { DeviceTypeEnum } from '@/store/general';
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
	const [isOpenInstallModal, openInstallModal, closeInstallModal] = useModal();
	const [isOpenInstructionModal, openInstructionModal] = useModal();
	const [innerWidth] = useResize();
	const { onClickSusbribeToPushNotification, userSubscription } = usePushNotifications();
	const { prompt, isActivePWA, isMobileDevice, deviceType } = useAppSelector(
		(state) => state.general
	);

	const getInstalledRelatedApps = async (): Promise<void> => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const relatedApps = await (navigator as any).getInstalledRelatedApps();
		const PWAisInstalled = relatedApps.length > 0;
		console.log(PWAisInstalled);
	};

	useEffect(() => {
		getInstalledRelatedApps();
	}, []);

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
