import { FC } from 'react';

import arrow from '@/assets/images/icons/arrow-top.svg';
import microphone from '@/assets/images/icons/microphone.svg';
import { useResize } from '@/hooks/useResize';
import { useAppDispatch, useAppSelector } from '@/store';
import { setInputValue } from '@/store/chat';

import { Button, Controls, Label, StyledInput } from './Input.styled';

export const Input: FC = () => {
	const dispatch = useAppDispatch();
	const { inputValue, hiddenInput } = useAppSelector((state) => state.chat);
	const [innerWidth] = useResize();

	return (
		<Label className={hiddenInput ? 'hidden' : ''}>
			<StyledInput
				value={inputValue}
				onChange={(e) => dispatch(setInputValue(e.target.value))}
				placeholder="Сообщение..."
			/>
			<Controls>
				{innerWidth > 1000 ? (
					<>
						<Button>
							<img src={microphone} alt="btn" />
						</Button>
						<Button style={{ background: '#4eb97f' }}>
							<img src={arrow} alt="btn" />
						</Button>
					</>
				) : (
					<>
						<Button>
							<img src={!inputValue ? microphone : arrow} alt="btn" />
						</Button>
					</>
				)}
			</Controls>
		</Label>
	);
};
