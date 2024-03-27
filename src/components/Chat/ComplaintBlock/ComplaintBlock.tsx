import { FC, useState } from 'react';

import { complaintList } from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';

import { Info, List, Subtitle } from './ComplaintBlock.styled';

export const ComplaintBlock: FC = () => {
	const [isOtherDescription, setOtherDescription] = useState(false);
	const [complaints, setComplaints] = useState<string[]>([]);

	const handleChangeComplaints = (item: string): void => {
		if (complaints.includes(item)) {
			const newComplaints = complaints.filter((i) => i !== item);
			setComplaints(newComplaints);
		} else {
			setComplaints([...complaints, item]);
		}
	};

	const handleActiveDescription = (): void => {
		if (!isOtherDescription) {
			setComplaints([]);
		}
		setOtherDescription(!isOtherDescription);
	};

	return (
		<WithChat title="Что вам не понравилось?">
			<>
				{!isOtherDescription && <Subtitle>Выберите 1 или более вариантов</Subtitle>}
				<List>
					{complaintList.map((item) => (
						<li key={item}>
							<button
								onClick={() => handleChangeComplaints(item)}
								className={complaints.includes(item) ? 'active' : ''}
							>
								{item}
							</button>
						</li>
					))}
					<li>
						<button
							onClick={handleActiveDescription}
							className={isOtherDescription ? 'active' : ''}
						>
							Другое
						</button>
					</li>
				</List>
				{isOtherDescription && (
					<Info>Опишите, пожалуйста, проблему в сообщении и отправьте нам</Info>
				)}
			</>
		</WithChat>
	);
};
