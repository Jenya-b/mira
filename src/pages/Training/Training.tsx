import { FC, useEffect } from 'react';

import smile from '@/assets/images/smile-confetti.png';
import { Input } from '@/components/ChatElements/Input/Input';
import { TextMessage } from '@/components/ChatElements/TextMessage/TextMessage';
import { BaseModal } from '@/components/Modal/Modal';
import { CardBlock } from '@/components/Training/Card/Card';
import { InputBlock } from '@/components/Training/InputBlock/InputBlock';
import { MenuBlock } from '@/components/Training/MenuBlock/MenuBlock';
import { SessionBlock } from '@/components/Training/SessionBlock/SessionBlock';
import { messagesListTraining } from '@/constants/chat';
import { PersonMessage } from '@/hocs/WithMessage/WithMessage';
import { useModal } from '@/hooks/useModal';
import { useAppSelector } from '@/store';
import { TrainingParam } from '@/store/training';

import { Container, DisabledBg, FilterBg, MessageWrap, Wrapper } from './Training.styled';

const Training: FC = () => {
	const { trainingBlock } = useAppSelector((state) => state.training);
	const [isOpen, openModal, closeModal] = useModal();

	useEffect(() => {
		if (trainingBlock === TrainingParam.MODAL) {
			openModal();
		}
	}, [trainingBlock]);

	const renderItem = (): JSX.Element => {
		switch (trainingBlock) {
			case TrainingParam.INPUT:
				return <InputBlock />;
			case TrainingParam.MENU:
				return <MenuBlock />;
			case TrainingParam.SESSION:
				return <SessionBlock />;
			case TrainingParam.CARD:
				return <CardBlock />;

			default:
				return <></>;
		}
	};

	const handleClickModal = (): void => {};

	return (
		<Wrapper>
			<Container>
				<MessageWrap>
					{messagesListTraining.map(({ text, searchBlock, logoParam }, i) => (
						<TextMessage
							key={i}
							logoParam={logoParam as PersonMessage}
							text={text}
							searchBlock={searchBlock}
						/>
					))}
				</MessageWrap>
				<Input />
			</Container>
			<DisabledBg className={trainingBlock}>
				<FilterBg className={trainingBlock} />
				<BaseModal
					buttonText="Отлично!"
					title="Инструкция успешно пройдена!"
					subtitle="Можно начинать общение с Мирой."
					imgSrc={smile}
					handleClickModal={handleClickModal}
					isOpen={isOpen}
					closeModal={closeModal}
				/>
			</DisabledBg>
			{renderItem()}
		</Wrapper>
	);
};

export default Training;
