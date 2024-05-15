import { FC, useEffect } from 'react';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';

import { useResize } from '@/hooks/useResize';
import { path } from '@/router/path';

import { NotFound } from './NotFound';
import { OtherError } from './OtherError';

export const ErrorBoundary: FC = () => {
	const error = useRouteError();
	const navigate = useNavigate();
	const [innerHeight] = useResize();

	useEffect(() => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, [innerHeight]);

	const handleNavigate = (): void => {
		navigate(path.home);
	};

	if (isRouteErrorResponse(error)) {
		return <NotFound handleNavigate={handleNavigate} />;
	}

	return <OtherError handleNavigate={handleNavigate} />;
};
