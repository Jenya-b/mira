import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useClipboard from 'react-use-clipboard';

import copyIcon from '@/assets/images/icons/copy.svg';
import { IData } from '@/constants/installPWA';
import { WithModal } from '@/hocs/WithModal/WithModal';
import { useAppSnackbar } from '@/hooks/useAppSnackbar';
import { path } from '@/router/path';

import { Button, ButtonLink, CopyBlock, ImageWrap, Title } from './InstructionModal.styled';

interface ModalProps {
	isOpen: boolean;
	data: IData[];
	closeModal?: () => void;
}

export const InstructionModal: FC<ModalProps> = ({ isOpen, data, closeModal }) => {
	const navigate = useNavigate();
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeData, setActiveData] = useState<IData | null>(null);
	const [isCopied, setCopied] = useClipboard(window.location.origin);
	const { openSnackbar } = useAppSnackbar();

	useEffect(() => {
		if (data[activeIndex]) {
			setActiveData(data[activeIndex]);
		}
	}, [activeIndex]);

	useEffect(() => {
		if (isCopied) {
			openSnackbar('success', 'URL-адрес скопирован');
		}
	}, [isCopied]);

	const handleClick = (): void => {
		const newIndex = activeIndex + 1;

		if (newIndex <= data.length - 1) {
			setActiveIndex(newIndex);
		} else {
			navigate(path.home);
		}
	};

	return (
		<WithModal handleClickClose={closeModal} open={isOpen}>
			<>
				{activeData !== null && (
					<>
						<Title>{activeData.title}</Title>
						{activeIndex === 0 && (
							<CopyBlock>
								<ButtonLink onClick={setCopied}>
									<span>mirahelps.online</span>
									<img src={copyIcon} alt="" />
								</ButtonLink>
							</CopyBlock>
						)}
						<ImageWrap>
							<img src={activeData.imgSrc} alt="" />
						</ImageWrap>
						<Button onClick={handleClick}>{activeData.buttonText}</Button>
					</>
				)}
			</>
		</WithModal>
	);
};
