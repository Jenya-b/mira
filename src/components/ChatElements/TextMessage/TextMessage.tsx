import { FC } from 'react';

import { Thoughts } from '../Thoughts/Thoughts';

import { PersonMessage, WithMessage } from '@/hocs/WithMessage/WithMessage';
import { ButtonsWS } from '@/store/chat';

import { ThoughtsWrap } from './TextMessage.styled';

interface TextMessageProps {
	logoParam: PersonMessage;
	text: string;
	buttons: ButtonsWS[] | null;
}

export const TextMessage: FC<TextMessageProps> = ({ logoParam, text, buttons }) => (
	<WithMessage logoParam={logoParam} text={text}>
		{buttons !== null ? (
			<ThoughtsWrap>
				{buttons.map(({ content }, i) => (
					<Thoughts key={i} list={[]} title={content} />
				))}
			</ThoughtsWrap>
		) : undefined}
	</WithMessage>
);
