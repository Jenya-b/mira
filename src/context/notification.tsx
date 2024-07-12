import { FC, MutableRefObject, ReactNode, createContext, useMemo, useRef } from 'react';

export enum NotificationState {
	NEW_THOUGHTS = 'NEW_THOUGHTS',
	REVIEW_WEEK = 'REVIEW_WEEK',
	PRACTICE = 'PRACTICE',
	TRAINER = 'TRAINER',
	END_SESSION = 'END_SESSION',
	CLOSE_SESSION = 'CLOSE_SESSION',
}

export interface Notification {
	is_all_user: boolean;
	user_id: number;
	type: NotificationState;
	created_at: string;
	content: string;
}

type NotificationContextType = {
	ws: MutableRefObject<WebSocket | null> | null;
};

const chatContextDefaultValues: NotificationContextType = {
	ws: null,
};

export const NotificationContext = createContext<NotificationContextType>(chatContextDefaultValues);

interface NotificationProviderProps {
	children: ReactNode;
}

export const NotificationProvider: FC<NotificationProviderProps> = ({ children }) => {
	const ws = useRef<WebSocket | null>(null);

	const value = useMemo(
		() => ({
			ws,
		}),
		[ws]
	);

	return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
