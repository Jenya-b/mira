import { Collapse } from '@mui/material';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { Sidebar } from '../Sidebar/Sidebar';
import { ButtonSecondary } from '../Sidebar/Sidebar.styled';

import arrowIcon from '@/assets/images/icons/arrow-left.svg';
import listIcon from '@/assets/images/icons/list.svg';
import settingsIcon from '@/assets/images/icons/settings.svg';
import { useResize } from '@/hooks/useResize';
import { path } from '@/router/path';
import { useAppDispatch, useAppSelector } from '@/store';
import { setOpenBurgerMenu } from '@/store/general';
import { setActiveFilter } from '@/store/practice';

import {
	BackLink,
	BurgerBtn,
	ButtonGroup,
	CountSession,
	Filter,
	Menu,
	Wrapper,
} from './BurgerMenu.styled';

export const BurgerMenu: FC = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const { isOpenBurgerMenu } = useAppSelector((state) => state.general);
	const { user } = useAppSelector((state) => state.user);
	const { activeFilter } = useAppSelector((state) => state.practice);
	const [innerWidth] = useResize();

	return (
		<Wrapper className={isOpenBurgerMenu ? 'active' : ''}>
			<Menu id="burger-menu">
				<BurgerBtn onClick={() => dispatch(setOpenBurgerMenu(!isOpenBurgerMenu))}>
					<span className={isOpenBurgerMenu ? 'active' : ''} />
				</BurgerBtn>
				{location.pathname === path.practice && innerWidth <= 480 ? (
					<>
						<BackLink to={location.state ? location.state.backPath : path.home}>
							<img src={arrowIcon} alt="" />
							<span>Вернуться назад</span>
						</BackLink>
						<Filter
							className={activeFilter ? 'active' : ''}
							onClick={() => dispatch(setActiveFilter(!activeFilter))}
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
						</Filter>
					</>
				) : (
					<>
						<ButtonGroup>
							<ButtonSecondary to={path.practice} state={{ backPath: location.pathname }}>
								<img src={listIcon} alt="list" />
								<p>Карточки</p>
							</ButtonSecondary>
							<ButtonSecondary to={path.exerciserSession}>
								<img src={settingsIcon} alt="setting" />
								<p>Тренажер</p>
							</ButtonSecondary>
						</ButtonGroup>
						<CountSession>
							<svg width="690" height="690" viewBox="0 0 690 690" fill="none">
								<path
									d="M585.603 97.513C589.429 100.915 592.977 104.096 597.175 107.86C597.911 95.8444 598.673 84.6743 599.263 73.495C600.357 52.7703 601.337 32.0396 602.395 11.3129C602.617 6.96258 605.595 3.88321 609.453 3.84803C613.428 3.81178 616.563 7.14218 616.361 11.8686C615.764 25.7996 614.961 39.7219 614.208 53.646C613.303 70.3916 612.339 87.1341 611.453 103.881C611.031 111.84 610.843 119.813 610.343 127.767C609.867 135.361 607.598 137.185 599.891 136.805C571.032 135.381 542.171 134.011 513.314 132.543C503.534 132.045 493.765 131.326 483.993 130.683C479.508 130.388 476.575 127.48 476.723 123.554C476.872 119.602 479.999 116.696 484.533 116.92C503.935 117.875 523.328 118.995 542.726 120.036C559.098 120.916 575.472 121.77 592.368 121.706C588.123 117.951 583.855 114.222 579.637 110.437C557.511 90.5793 534.596 71.8117 508.504 57.2208C474.61 38.2668 438.713 25.1583 400.343 18.758C380.483 15.4451 360.54 13.5392 340.431 13.9902C275.008 15.4577 215.003 34.4603 160.911 71.1808C96.7213 114.757 52.2641 173.446 28.6546 247.555C20.8937 271.917 16.2707 296.89 14.8219 322.472C9.54289 415.679 38.7139 497.117 100.041 566.775C147.942 621.182 208.253 655.332 279.341 669.922C309.731 676.159 340.549 677.982 371.436 674.939C449.162 667.282 517.131 637.444 574.013 583.635C625.328 535.092 657.01 475.674 670.325 406.353C675.995 376.836 678.015 347.06 674.84 317.225C672.887 298.869 668.69 280.753 665.5 262.529C665.357 261.713 665.264 260.883 665.062 260.081C664.026 255.969 665.209 252.744 669.266 251.265C673.419 249.752 677.236 251.829 678.26 256.575C681.432 271.269 685.023 285.934 687.035 300.801C689.817 321.354 690.644 342.047 689.505 362.877C687.445 400.552 679.947 436.997 665.836 471.915C628.801 563.56 563.375 627.079 472.502 664.723C444.006 676.527 414.187 683.757 383.471 687.436C357.787 690.512 332.122 690.93 306.48 688.091C256.452 682.552 209.791 666.896 166.809 640.486C116.113 609.337 76.2474 567.747 46.6261 516.25C26.4982 481.257 12.8721 443.902 5.66559 404.148C0.518781 375.756 -1.31184 347.193 0.962623 318.471C4.81382 269.839 18.2262 223.962 41.9264 181.203C75.1343 121.29 122.035 75.0958 181.985 42.2033C216.152 23.4573 252.535 10.9158 291.095 4.64584C317.604 0.335526 344.219 -1.19169 370.941 0.982403C413.329 4.43098 453.885 14.9922 492.432 33.2199C526.922 49.5285 557.586 71.2599 585.603 97.513Z"
									fill="white"
									fillOpacity="0.5"
								/>
							</svg>
							<p>{user?.available_sessions ?? 0}</p>
						</CountSession>
					</>
				)}
			</Menu>
			<Collapse in={isOpenBurgerMenu}>
				<Sidebar closeMenu={() => dispatch(setOpenBurgerMenu(false))} />
			</Collapse>
		</Wrapper>
	);
};
