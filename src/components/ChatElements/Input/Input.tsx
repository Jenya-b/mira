import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import arrow from '@/assets/images/icons/arrow-top.svg';
import microphone from '@/assets/images/icons/microphone.svg';
import { useResize } from '@/hooks/useResize';
import { useAppSelector } from '@/store';
import { TrainingParam } from '@/store/training';

import { Button, Controls, Label, StyledInput } from './Input.styled';

interface InputProps {
	sendMessage: () => void;
	hiddenInput: boolean;
	inputValue: string;
	inputBlock: boolean;
	handleInputValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Input: FC<InputProps> = ({
	sendMessage,
	handleInputValue,
	hiddenInput,
	inputBlock,
	inputValue,
}) => {
	const { pathname } = useLocation();
	const { trainingBlock } = useAppSelector((state) => state.training);
	const [trClassName, setTrClassName] = useState('');
	const [innerWidth] = useResize();
	const inputRef = useRef<HTMLTextAreaElement | null>(null);

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

	useEffect(() => {
		if (innerWidth > 1000 && !hiddenInput) {
			inputRef.current?.focus();
		}
	}, [inputBlock, hiddenInput]);

	const handleKeyPress = (event: KeyboardEvent): void => {
		if (event.key === 'Enter') {
			sendMessage();
		}
	};

	return (
		<Label className={trClassName || (hiddenInput ? 'hidden' : '')}>
			<StyledInput
				ref={inputRef}
				value={inputValue}
				onChange={handleInputValue}
				onKeyPress={handleKeyPress}
				placeholder="Сообщение..."
				disabled={inputBlock}
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
