import { FC, useState } from 'react';

import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';

import { List } from './CheckWithUser.styled';

const list = ['Теперь сильно сомневаюсь', 'Стал немного сомневаться', 'Мысль также верна'];

export const CheckWithUser: FC = () => {
	const [active, setActive] = useState<string>('');

	return (
		<WithMessage logoParam={PersonMessage.MIRA_CHECK} text="Насколько вы согласны с моей мыслью?">
			<List>
				{list.map((item) => (
					<li key={item}>
						<button className={item === active ? 'active' : ''} onClick={() => setActive(item)}>
							{item}
						</button>
					</li>
				))}
			</List>
		</WithMessage>
	);
};
