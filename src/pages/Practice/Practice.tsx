import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BackLink } from '@/components/BackLink/BackLink';
import { Loader } from '@/components/Loader/Loader';
import { Card } from '@/components/Practice/Card/Card';
import { CopingCardBlock } from '@/components/Training/CopingCard/CopingCard';
import { FilterBlock } from '@/components/Training/FilterBlock/FilterBlock';
import { path } from '@/router/path';
import {
	useAddFavoriteCartMutation,
	useDeleteFavoriteCartMutation,
	useGetCopingCartsQuery,
} from '@/services/api/copingCarts';
import { useAppDispatch, useAppSelector } from '@/store';
import { CopingCarts, updateFavoriteCart } from '@/store/copingCart';
import { TrainingBlock, setActiveFilter } from '@/store/practice';
import { getMyDate } from '@/utils/time';

import {
	Container,
	Content,
	Controls,
	Filter,
	Wrapper,
	DisabledBg,
	FilterBg,
} from './Practice.styled';

const Practice: FC = () => {
	const { state: stateLocation } = useLocation();
	const dispatch = useAppDispatch();
	const { activeFilter, trainingBlock } = useAppSelector(({ practice }) => practice);
	const { user } = useAppSelector((state) => state.user);
	const { copingCarts } = useAppSelector((state) => state.copingCarts);
	const [sortingCopingCarts, setSortingCopingCarts] = useState<CopingCarts[]>([]);

	const { isLoading } = useGetCopingCartsQuery({});

	const [fetchAddFavorite] = useAddFavoriteCartMutation();
	const [fetchDeleteFavorite] = useDeleteFavoriteCartMutation();

	useEffect(() => {
		if (!copingCarts.length) {
			return;
		}

		const newCopingCarts = copingCarts.slice();
		newCopingCarts.sort((a, b) => Number(b.is_favorite) - Number(a.is_favorite));
		setSortingCopingCarts(newCopingCarts);
	}, [copingCarts, activeFilter]);

	const renderTrainingBlock = (): JSX.Element => {
		switch (trainingBlock) {
			case TrainingBlock.FILTER:
				return <FilterBlock />;

			case TrainingBlock.COPING_CARD:
				return <CopingCardBlock />;

			default:
				return <></>;
		}
	};

	const handleUpdateFavorite = (id: number, isFavorite: boolean): void => {
		if (isFavorite) {
			fetchAddFavorite({ id })
				.unwrap()
				.then(() => dispatch(updateFavoriteCart({ id, isFavorite })));
		} else {
			fetchDeleteFavorite({ id })
				.unwrap()
				.then(() => dispatch(updateFavoriteCart({ id, isFavorite })));
		}
	};

	return (
		<Wrapper>
			{isLoading && <Loader />}
			<Container>
				<Controls>
					<BackLink
						path={stateLocation ? stateLocation.backPath : path.home}
						textLink="Вернуться назад"
					/>
					<Filter
						onClick={() => dispatch(setActiveFilter(!activeFilter))}
						className={
							user && !user.training_coping_carts_passed && trainingBlock === TrainingBlock.FILTER
								? 'training'
								: activeFilter
									? 'active'
									: ''
						}
					>
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
							<g clipPath="url(#clip0_1169_35060)">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M0.46875 2.64491H7.45409C7.42356 2.49638 7.4071 2.34277 7.40643 2.18554L7.40648 2.17238C7.40669 2.01321 7.42298 1.85773 7.45371 1.70744H0.46875C0.209795 1.70744 0 1.91721 0 2.17619C0 2.43518 0.209766 2.64497 0.46875 2.64491ZM6.72138 7.49923V7.50509C6.71897 8.30738 6.06428 8.96 5.2623 8.96C4.46106 8.95997 3.80634 8.30806 3.80291 7.50644L3.80294 7.4982C3.80394 6.6945 4.45828 6.04121 5.2623 6.04121C6.06565 6.04118 6.71965 6.69418 6.72138 7.49718V7.49923ZM14.5312 7.03186H7.54623C7.5769 7.18162 7.59322 7.33654 7.59357 7.49516V7.49841V7.50775C7.59311 7.66578 7.57673 7.82015 7.54608 7.96939L14.5312 7.96936C14.7902 7.96936 15 7.75962 15 7.50064C15 7.24162 14.7902 7.03186 14.5312 7.03186ZM2.97803 7.03186H0.46875C0.209795 7.03186 0 7.24165 0 7.50064C0 7.75959 0.209766 7.96939 0.46875 7.96939L2.97841 7.96936C2.94785 7.82082 2.93142 7.66719 2.93074 7.50995L2.93077 7.4968C2.93098 7.3376 2.94727 7.18215 2.97803 7.03186ZM9.7377 14.2844C8.93435 14.2844 8.28035 13.6314 8.27862 12.8284V12.8264C8.27862 12.8243 8.27862 12.8226 8.27862 12.8206C8.28105 12.0182 8.93572 11.3656 9.73767 11.3656C10.539 11.3656 11.1936 12.0176 11.1971 12.8192L11.1971 12.8274C11.1961 13.6311 10.5417 14.2844 9.7377 14.2844ZM14.5312 12.3563H12.0219C12.0526 12.506 12.0689 12.661 12.0692 12.8195V12.8228V12.8321C12.0688 12.9902 12.0524 13.1445 12.0217 13.2937H14.5312C14.7902 13.2937 15 13.084 15 12.825C15 12.5661 14.7902 12.3563 14.5312 12.3563ZM7.45371 12.3563H0.46875C0.209795 12.3563 0 12.5661 0 12.825C0 13.084 0.209766 13.2938 0.46875 13.2938H7.45409C7.42356 13.1452 7.4071 12.9916 7.40643 12.8344L7.40648 12.8212C7.40669 12.662 7.42298 12.5066 7.45371 12.3563ZM8.27862 2.17757C8.27862 2.17546 8.27862 2.17379 8.27862 2.17171C8.28105 1.36938 8.93572 0.716797 9.73767 0.716797C10.539 0.716768 11.1936 1.36874 11.1971 2.17036L11.1971 2.17856C11.1957 2.98191 10.5417 3.63559 9.73767 3.63559C8.93435 3.63559 8.28032 2.98259 8.27862 2.17962V2.17757ZM12.0218 2.64497L14.5312 2.64491C14.7902 2.64491 15 2.43518 15 2.17619C15 1.91718 14.7902 1.70744 14.5312 1.70744H12.0219C12.0526 1.85721 12.0689 2.01213 12.0692 2.17071V2.17396V2.18331C12.0688 2.34137 12.0524 2.4957 12.0218 2.64497Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1169_35060">
									<rect width="15" height="15" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<span>Фильтр карточек</span>
					</Filter>
				</Controls>
				<Content>
					{(activeFilter ? sortingCopingCarts : copingCarts).map(
						({ created_at, id, is_favorite, new_thought, situation, thought }) => (
							<Card
								key={id}
								date={getMyDate(created_at)}
								favorites={is_favorite}
								btnText1={new_thought}
								btnText2={thought}
								btnText3={situation}
								btnText4="Новая мысль плохо работает"
								handleClickFavorite={() => handleUpdateFavorite(id, !is_favorite)}
							/>
						)
					)}
				</Content>
			</Container>
			{user && !user.training_coping_carts_passed && (
				<>
					<DisabledBg>
						<FilterBg />
					</DisabledBg>
					{renderTrainingBlock()}
				</>
			)}
		</Wrapper>
	);
};

export default Practice;
