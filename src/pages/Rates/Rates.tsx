import { FC, useState } from 'react';
import Confetti from 'react-confetti';

import { Card } from '../../components/Rates/Card/Card';

import smile from '@/assets/images/smile-confetti.png';
import { BaseModal } from '@/components/Modal/Modal';
import { rateList } from '@/constants/rates';
import { useModal } from '@/hooks/useModal';
import { useResize } from '@/hooks/useResize';

import { Container, RatesWrap, Title, Wrapper } from './Rates.styled';

const Rates: FC = () => {
	const [width, height] = useResize();
	const [party, setParty] = useState(false);
	const [isOpen, openModal, closeModal] = useModal();

	const handleSubmit = (): void => {
		openModal();
		setParty(true);
	};

	const handleClickModal = (): void => {
		closeModal();
	};

	return (
		<Wrapper>
			<BaseModal
				buttonText="Отлично!"
				title="Вы успешно приобрели пакет из 7 сессий!"
				subtitle="Теперь вы можете продолжить общение с Мирой."
				imgSrc={smile}
				handleClickModal={handleClickModal}
				isOpen={isOpen}
				closeModal={closeModal}
			/>
			<Confetti
				onConfettiComplete={(confetti) => {
					setParty(false);
					confetti?.reset();
				}}
				style={{ pointerEvents: 'none', zIndex: 10000 }}
				numberOfPieces={party ? 1000 : 0}
				recycle={false}
				width={width}
				height={height}
			/>
			<Container>
				<Title>Тарифы и оплата</Title>
				<RatesWrap>
					{rateList.map((item) => (
						<Card key={item.title} {...item} handleSubmit={handleSubmit} />
					))}
				</RatesWrap>
			</Container>
		</Wrapper>
	);
};

export default Rates;
