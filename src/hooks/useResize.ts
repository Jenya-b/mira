import { useEffect, useState } from 'react';

export const useResize = (): number[] => {
	const [size, setSize] = useState([0, 0]);

	useEffect(() => {
		const getSize = (): void => setSize([window.innerWidth, window.innerHeight]);
		getSize();

		window.addEventListener('resize', getSize);

		return () => window.removeEventListener('resize', getSize);
	}, []);

	return size;
};
