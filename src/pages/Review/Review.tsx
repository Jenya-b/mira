import { FC, useEffect, useState } from 'react';

import { BackLink } from '@/components/BackLink/BackLink';
import { Loader } from '@/components/Loader/Loader';
import { ParamsBlock } from '@/components/Review/ParamsBlock/ParamsBlock';
import { path } from '@/router/path';
import { useGetWeeklyReviewQuery } from '@/services/api/notification';

import {
	Card,
	Container,
	Content,
	ParamsWrap,
	SessionCount,
	SessionInfo,
	Subtitle,
	Title,
	Wrapper,
} from './Review.styled';

const Review: FC = () => {
	const [title, setTitle] = useState('');
	const { data, isLoading, isSuccess } = useGetWeeklyReviewQuery(null);

	useEffect(() => {
		if (data === undefined) {
			return;
		}

		setTitle(
			data.count_sessions >= 7
				? 'Отличная работа! 🌟'
				: data.count_sessions >= 4
					? 'Хороший результат! 🏆'
					: data.count_sessions >= 2
						? 'Неплохо! 👍'
						: 'Спасибо, что вы с нами! 🎉'
		);
	}, [isSuccess, data]);

	return (
		<Wrapper>
			{isLoading && <Loader />}
			<Container>
				<div>
					<BackLink path={path.home} textLink="Вернуться на главную" />
				</div>
				<Content>
					<Card>
						<Title>Обзор вашей недели</Title>
						<Subtitle>
							Каждую неделю я буду присылать обзор ваших успехов по замене мыслей, ведь рефлексия и
							осознание проблемы являются самыми главными элементами на пути.
						</Subtitle>
					</Card>
					{data !== undefined && (
						<>
							<Card>
								<Title>{title}</Title>
								<Subtitle>
									<span>Кол-во пройденных сессий за последние семь дней:</span>
								</Subtitle>
								<SessionInfo>
									Для лучшего результата рекомендуем не менее 7 сессий в неделю
								</SessionInfo>
								<SessionCount>{data.count_sessions}</SessionCount>
							</Card>
							<Card>
								<Title>Эти мысли осложняют вашу жизнь:</Title>
								<ParamsWrap className="exception">
									{Object.entries(data.group_negative_through).map(([key, values]) => (
										<ParamsBlock key={key} title={key} list={values} exception />
									))}
								</ParamsWrap>
							</Card>
							<Card className="exception">
								<Title>Выявленные триггерные ситуации:</Title>
								<ParamsWrap>
									<ParamsBlock exception list={['...', '....']} />
								</ParamsWrap>
							</Card>
							<Card>
								<Subtitle>
									Безусловно, одномоментно от этого избавится не получится, даже осознать сразу не
									так просто. Но, постепенно прорабатывая разные ситуации своей жизни, вы сможете
									изменить подход к себе и жизни в целом, найдете тот баланс, при котором вы сможете
									испытывать гораздо меньше негативных эмоций и при этом не чувствовать
									незащищенным.
								</Subtitle>
							</Card>
						</>
					)}
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Review;
