import { FC, useCallback } from 'react';

import modalImg from '@/assets/images/phoneForModal.png';
import { Accordion } from '@/components/Accordion/Accordion';
import { BaseModal } from '@/components/Modal/Modal';
import { InstructionModal } from '@/components/TherapySettings/InstructionModal/InstructionModal';
import { ButtonType, accordionList } from '@/constants/accordion';
import { dataAndroid, dataIos } from '@/constants/installPWA';
import { useModal } from '@/hooks/useModal';
import { useAppSelector } from '@/store';
import { DeviceTypeEnum } from '@/store/general';

import { AccordionWrap, Button, Container, Controls, Title, Wrapper } from './Questions.styled';

const Questions: FC = () => {
	const [isOpenInstallModal, openInstallModal, closeInstallModal] = useModal();
	const [isOpenInstructionModal, openInstructionModal, closeInstructionModal] = useModal();
	const { prompt, isMobileDevice, deviceType } = useAppSelector((state) => state.general);

	const handleClick = useCallback((type: ButtonType | undefined): void => {
		switch (type) {
			case ButtonType.INSTALL_PWA:
				openInstallModal();
				break;
			default:
				break;
		}
	}, []);

	const handleClickModal = (): void => {
		if (prompt) {
			prompt.prompt();
		} else if (deviceType !== DeviceTypeEnum.DESKTOP) {
			closeInstallModal();
			openInstructionModal();
		}
	};

	return (
		<Wrapper>
			{isMobileDevice ? (
				<>
					<BaseModal
						buttonText="Установить"
						buttonTextSecond="Пропустить"
						isOpen={isOpenInstallModal}
						title="Для настройки терапии установите приложение"
						imgSrc={modalImg}
						handleClickModal={handleClickModal}
						handleClickModalSecond={closeInstallModal}
					/>
					<InstructionModal
						isOpen={isOpenInstructionModal}
						data={deviceType === DeviceTypeEnum.IOS ? dataIos : dataAndroid}
						closeModal={closeInstructionModal}
					/>
				</>
			) : (
				<BaseModal
					buttonText="Закрыть"
					isOpen={isOpenInstallModal}
					title="Настройка терапии"
					subtitle="Для настройки терапии перейдите в мобильное устройство и установите приложение."
					imgSrc={modalImg}
					handleClickModal={closeInstallModal}
				/>
			)}
			<Container>
				<Title>Вопросы и ответы</Title>
				<AccordionWrap>
					{accordionList.map(({ desc, title, button }, i) => (
						<Accordion
							key={i}
							title={title}
							desc={desc}
							button={button}
							handleClick={handleClick}
						/>
					))}
				</AccordionWrap>
				<Controls>
					<Button>Задать вопрос</Button>
				</Controls>
			</Container>
		</Wrapper>
	);
};

export default Questions;
