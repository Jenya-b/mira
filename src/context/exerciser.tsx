import { FC, MutableRefObject, ReactNode, createContext, useMemo, useRef } from 'react';

type ExerciserContextType = {
	ws: MutableRefObject<WebSocket | null> | null;
};

const exerciserContextDefaultValues: ExerciserContextType = {
	ws: null,
};

export const ExerciserContext = createContext<ExerciserContextType>(exerciserContextDefaultValues);

interface ExerciserProviderProps {
	children: ReactNode;
}

export const ExerciserProvider: FC<ExerciserProviderProps> = ({ children }) => {
	const ws = useRef<WebSocket | null>(null);

	const value = useMemo(
		() => ({
			ws,
		}),
		[ws]
	);

	return <ExerciserContext.Provider value={value}>{children}</ExerciserContext.Provider>;
};
