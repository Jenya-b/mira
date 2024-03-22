import { Box } from '@mui/material';
import { FC } from 'react';

import { Line, LoaderWrapper, Logo, StyledLinearProgress } from './Loader.styled';

export const Loader: FC = () => (
	<LoaderWrapper>
		<Logo />
		<Box sx={{ maxWidth: '20rem', width: '100%', marginBottom: '5.14rem', position: 'relative' }}>
			<Line />
			<StyledLinearProgress />
		</Box>
	</LoaderWrapper>
);
