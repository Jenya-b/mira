import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { Loader } from '@/components/Loader/Loader';
import { path } from '@/router/path';
import { useLazyGetUserQuery } from '@/services/api/user';
import { useAppSelector } from '@/store';

interface RequireAuthProps {
	children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps): JSX.Element => {
	const { accessToken } = useAppSelector((state) => state.user);

	const [fetchGetUser, { isLoading, isError }] = useLazyGetUserQuery();

	useEffect(() => {
		if (accessToken) {
			fetchGetUser(null);
		}
	}, [accessToken]);

	if (isLoading) {
		return <Loader />;
	}

	if (isError || accessToken === null) {
		return <Navigate to={path.auth} />;
	}

	return children;
};
