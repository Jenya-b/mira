import { FC } from 'react';

import { List, Title } from './ParamsBlock.styled';

interface ParamsBlockProps {
	title?: string;
	list: string[];
	exception?: boolean;
}

export const ParamsBlock: FC<ParamsBlockProps> = ({ list, title, exception = false }) => (
	<div>
		{!!title && <Title>{title}</Title>}
		<List className={exception ? 'exception' : ''}>
			{list.map((item) => (
				<li key={item}>{item}</li>
			))}
		</List>
	</div>
);
