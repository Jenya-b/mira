import { FC } from 'react';

import { Thoughts } from '../Thoughts/Thoughts';

import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';

import { ThoughtsWrap } from './TextMessage.styled';

interface TextMessageProps {
	logoParam: PersonMessage;
	text: string;
	searchBlock: {
		title: string;
		list: string[];
	}[];
}

export const TextMessage: FC<TextMessageProps> = ({ logoParam, text, searchBlock }) => (
	<WithMessage logoParam={logoParam} text={text}>
		{searchBlock.length ? (
			<ThoughtsWrap>
				{searchBlock.map(({ list, title }, i) => (
					<Thoughts key={i} list={list} title={title} />
				))}
			</ThoughtsWrap>
		) : undefined}
	</WithMessage>
);
