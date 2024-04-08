import { FC, useState } from 'react';

import { Desc, Title, Wrapper } from './Accordion.styled';

interface AccordionProps {
	title: string;
	desc: string;
}

export const Accordion: FC<AccordionProps> = ({ desc, title }) => {
	const [open, setOpen] = useState(false);

	return (
		<Wrapper className={open ? 'open' : ''} onClick={() => setOpen(!open)}>
			<svg width="35" height="35" viewBox="0 0 35 35" fill="none">
				<circle cx="17.5" cy="17.5" r="17.5" fill={open ? '#4EB97F' : '#488CE1'} />
				<path
					d="M16.6673 25.7901V18.948H9.8252V16.6673H16.6673V9.8252H18.948V16.6673H25.7901V18.948H18.948V25.7901H16.6673Z"
					fill={open ? 'white' : '#2D327E'}
				/>
			</svg>
			<Title>{title}</Title>
			<Desc className={open ? 'open' : ''}>{desc}</Desc>
		</Wrapper>
	);
};
