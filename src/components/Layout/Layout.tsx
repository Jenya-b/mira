import { Collapse } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../Sidebar/Sidebar';
import { ButtonSecondary } from '../Sidebar/Sidebar.styled';

import listIcon from '@/assets/images/icons/list.svg';
import settingsIcon from '@/assets/images/icons/settings.svg';
import { useResize } from '@/hooks/useResize';

import {
	BurgerBtn,
	ButtonGroup,
	CountSession,
	MobMenu,
	MobMenuWrap,
	Wrapper,
} from './Layout.styled';

export const Layout: FC = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [innerWidth, innerHeight] = useResize();

	useEffect(() => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, [innerHeight]);

	return (
		<Wrapper>
			{innerWidth > 1000 ? (
				<Sidebar />
			) : (
				<MobMenu className={isOpenMenu ? 'active' : ''}>
					<MobMenuWrap>
						<BurgerBtn onClick={() => setIsOpenMenu(!isOpenMenu)}>
							<span className={isOpenMenu ? 'active' : ''} />
						</BurgerBtn>
						<ButtonGroup>
							<ButtonSecondary>
								<img src={listIcon} alt="list" />
								<p>Карточки</p>
							</ButtonSecondary>
							<ButtonSecondary>
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
							<p>22</p>
						</CountSession>
					</MobMenuWrap>
					<Collapse in={isOpenMenu}>
						<Sidebar />
					</Collapse>
				</MobMenu>
			)}
			<Outlet />
		</Wrapper>
	);
};
