import { FC } from 'react';

import { Accordion } from '@/components/Accordion/Accordion';
import { accordionList } from '@/constants/accordion';

import { AccordionWrap, Button, Container, Controls, Title, Wrapper } from './Questions.styled';

const Questions: FC = () => (
	<Wrapper>
		<Container>
			<Title>Вопросы и ответы</Title>
			<AccordionWrap>
				{accordionList.map(({ desc, title }, i) => (
					<Accordion key={i} title={title} desc={desc} />
				))}
			</AccordionWrap>
			<Controls>
				<Button>Задать вопрос</Button>
			</Controls>
		</Container>
	</Wrapper>
);

export default Questions;
