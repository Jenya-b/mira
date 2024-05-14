import { FC, memo, useState } from 'react';

import { ButtonType } from '@/constants/accordion';

import { Desc, Title, Wrapper } from './Accordion.styled';

interface AccordionProps {
	title: string;
	desc: string;
	button?: {
		text: string;
		type: ButtonType;
	};
	handleClick: (type: ButtonType | undefined) => void;
}

export const Accordion: FC<AccordionProps> = memo(({ desc, title, button, handleClick }) => {
	const [open, setOpen] = useState(false);

	return (
		<Wrapper className={open ? 'open' : ''}>
			<Title onClick={() => setOpen(!open)}>
				<svg width="35" height="35" viewBox="0 0 35 35" fill="none">
					<circle cx="17.5" cy="17.5" r="17.5" fill={open ? '#4EB97F' : '#488CE1'} />
					<path
						d="M16.6673 25.7901V18.948H9.8252V16.6673H16.6673V9.8252H18.948V16.6673H25.7901V18.948H18.948V25.7901H16.6673Z"
						fill={open ? 'white' : '#2D327E'}
					/>
				</svg>
				<p>{title}</p>
			</Title>
			<Desc className={open ? 'open' : ''}>
				<p>{desc}</p>
				{button !== undefined && (
					<button onClick={() => handleClick(button.type)}>{button.text}</button>
				)}
			</Desc>
		</Wrapper>
	);
});
