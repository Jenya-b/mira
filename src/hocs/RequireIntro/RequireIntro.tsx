import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { path } from '@/router/path';
import { useAppSelector } from '@/store';

interface RequireIntroProps {
	children: JSX.Element;
}

export const RequireIntro = ({ children }: RequireIntroProps): JSX.Element => {
	const navigate = useNavigate();
	const { user } = useAppSelector((state) => state.user);

	useEffect(() => {
		if (user !== null && !user.intro_passed) {
			navigate(path.intro);
		} else if (user !== null && !user.training_after_intro_passed) {
			navigate(path.training);
		}
	}, [user]);

	return children;
};
