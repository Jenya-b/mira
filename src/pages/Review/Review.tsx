import { FC } from 'react';

import arrowIcon from '@/assets/images/icons/arrow-left.svg';
import { ParamsBlock } from '@/components/Review/ParamsBlock/ParamsBlock';
import { path } from '@/router/path';

import {
	Card,
	Container,
	Content,
	ParamsWrap,
	SessionCount,
	SessionInfo,
	StyledLink,
	Subtitle,
	Title,
	Wrapper,
} from './Review.styled';

const Review: FC = () => (
	<Wrapper>
		<Container>
			<StyledLink to={path.home}>
				<img src={arrowIcon} alt="" />
				<span>Вернуться на главную</span>
			</StyledLink>
			<Content>
				<Card>
					<Title>Обзор вашей недели</Title>
					<Subtitle>
						Каждую неделю я буду присылать обзор ваших успехов по замене мыслей, ведь рефлексия и
						осознание проблемы являются самыми главными элементами на пути.
					</Subtitle>
				</Card>
				<Card>
					<Title>Отличная работа 🌟</Title>
					<Subtitle>
						<span>Кол-во пройденных сессий за последние семь дней:</span>
					</Subtitle>
					<SessionInfo>Для лучшего результата рекомендуем не менее 7 сессий в неделю</SessionInfo>
					<SessionCount>6</SessionCount>
				</Card>
				<Card>
					<Title>Эти мысли осложняют вашу жизнь:</Title>
					<ParamsWrap className="exception">
						<ParamsBlock
							title="Долженствование"
							list={['Я должен много зарабатывать', 'Все должны меня уважать']}
						/>
						<ParamsBlock
							title="Катастрофизация"
							list={['Я должен много зарабатывать', 'Все должны меня уважать']}
						/>
					</ParamsWrap>
				</Card>
				<Card className="exception">
					<Title>Выявленные триггерные ситуации:</Title>
					<ParamsWrap>
						<ParamsBlock
							exception
							list={['Я должен много зарабатывать', 'Все должны меня уважать']}
						/>
					</ParamsWrap>
				</Card>
				<Card>
					<Subtitle>
						Безусловно, одномоментно от этого избавится не получится, даже осознать сразу не так
						просто. Но, постепенно прорабатывая разные ситуации своей жизни, вы сможете изменить
						подход к себе и жизни в целом, найдете тот баланс, при котором вы сможете испытывать
						гораздо меньше негативных эмоций и при этом не чувствовать незащищенным.
					</Subtitle>
				</Card>
			</Content>
		</Container>
	</Wrapper>
);

export default Review;
