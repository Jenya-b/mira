import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from '@/components/TherapySettings/Card/Card';
import { Dialog } from '@/components/TherapySettings/Dialog/Dialog';
import { useModal } from '@/hooks/useModal';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { useResize } from '@/hooks/useResize';
import { path } from '@/router/path';
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
	const [isOpenDialog, openDialog, closeDialog] = useModal();
	const [innerWidth] = useResize();
	const { onClickSusbribeToPushNotification, userSubscription } = usePushNotifications();

	useEffect(() => {
		if (userSubscription !== null) {
			setActiveSettings(true);
		}
	}, [userSubscription]);

	const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const { checked } = event.target;

		if (checked) {
			setActiveSettings(checked);
			onClickSusbribeToPushNotification();
		} else {
			openDialog();
		}
	};

	const handleDisabledSettings = (): void => {
		setActiveSettings(false);
		closeDialog();
	};

	return (
		<Wrapper>
			<Dialog
				isOpen={isOpenDialog}
				closeModal={closeDialog}
				handleClickModal={handleDisabledSettings}
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
