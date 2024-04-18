import { FC } from 'react';

import arrowIcon from '@/assets/images/icons/arrow-left.svg';

import { StyledLink } from './BackLink.styled';

interface BackLinkProps {
	path: string;
	textLink: string;
}

export const BackLink: FC<BackLinkProps> = ({ path, textLink }) => (
	<StyledLink to={path}>
		<img src={arrowIcon} alt="" />
		<span>{textLink}</span>
	</StyledLink>
);
