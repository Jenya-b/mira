import { FC, useState } from 'react';

import miraIcon from '@/assets/images/icons/logo-chat2.svg';

import { List, Logo, Text, Wrapper } from './CheckWithUser.styled';

const list = ['Теперь сильно сомневаюсь', 'Стал немного сомневаться', 'Мысль также верна'];

export const CheckWithUser: FC = () => {
	const [active, setActive] = useState<string>('');

	return (
		<Wrapper>
			<Logo>
				<img src={miraIcon} alt="logo" />
			</Logo>
			<Text>Насколько вы согласны с моей мыслью?</Text>
			<List>
				{list.map((item) => (
					<li key={item}>
						<button className={item === active ? 'active' : ''} onClick={() => setActive(item)}>
							{item}
						</button>
					</li>
				))}
			</List>
		</Wrapper>
	);
};
