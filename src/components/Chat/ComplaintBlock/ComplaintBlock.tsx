import { FC, useEffect, useState } from 'react';

import { complaintList } from '@/constants/chat';
import { WithChat } from '@/hocs/WithChat/WithChat';
import { useAppDispatch } from '@/store';
import { setHideInput } from '@/store/chat';

import { Button, List } from './ComplaintBlock.styled';

export const ComplaintBlock: FC = () => {
	const dispatch = useAppDispatch();
	const [isOtherDescription, setOtherDescription] = useState(false);
	const [complaints, setComplaints] = useState<string[]>([]);

	useEffect(() => {
		if (isOtherDescription) {
			dispatch(setHideInput(false));
		} else {
			dispatch(setHideInput(true));
		}
	}, [isOtherDescription, complaints]);

	const handleChangeComplaints = (item: string): void => {
		if (complaints.includes(item)) {
			const newComplaints = complaints.filter((i) => i !== item);
			setComplaints(newComplaints);
		} else {
			setComplaints([...complaints, item]);
		}
		setOtherDescription(false);
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
				<List className={isOtherDescription ? 'subtitle-hide' : 'desc-act'}>
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
				{!!complaints.length && <Button>Отправить</Button>}
			</>
		</WithChat>
	);
};
