import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import arrow from '@/assets/images/icons/arrow-top.svg';
import microphone from '@/assets/images/icons/microphone.svg';
import { useResize } from '@/hooks/useResize';
import { useAppSelector } from '@/store';
import { TrainingParam } from '@/store/training';

import { Button, Controls, Label, StyledInput } from './Input.styled';

interface InputProps {
	inputValue: string;
	setInputValue: Dispatch<SetStateAction<string>>;
	sendMessage: () => void;
}

export const Input: FC<InputProps> = ({ inputValue, setInputValue, sendMessage }) => {
	const { pathname } = useLocation();
	const { trainingBlock } = useAppSelector((state) => state.training);
	const { hiddenInput } = useAppSelector((state) => state.chat);
	const [trClassName, setTrClassName] = useState('');
	const [innerWidth] = useResize();

	useEffect(() => {
		if (pathname.match('training')?.length) {
			if (trainingBlock === TrainingParam.INPUT) {
				setTrClassName(TrainingParam.INPUT);
			} else if (trainingBlock === TrainingParam.MICROPHONE) {
				setTrClassName(TrainingParam.MICROPHONE);
			} else {
				setTrClassName('');
			}
		}
	}, [trainingBlock, pathname]);

	return (
		<Label className={trClassName || (hiddenInput ? 'hidden' : '')}>
			<StyledInput
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Сообщение..."
			/>
			<Controls className={trClassName}>
				{innerWidth > 1000 ? (
					<>
						<Button>
							<img src={microphone} alt="btn" />
						</Button>
						<Button style={{ background: '#4eb97f' }} onClick={sendMessage}>
							<img src={arrow} alt="btn" />
						</Button>
					</>
				) : (
					<>
						<Button onClick={inputValue ? sendMessage : undefined}>
							<img src={!inputValue ? microphone : arrow} alt="btn" />
						</Button>
					</>
				)}
			</Controls>
		</Label>
	);
};
