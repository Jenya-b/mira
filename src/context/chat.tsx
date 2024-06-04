import { FC, MutableRefObject, ReactNode, createContext, useMemo, useRef } from 'react';

type ChatContextType = {
	ws: MutableRefObject<WebSocket | null> | null;
	reconnectInterval: MutableRefObject<ReturnType<typeof setTimeout> | null> | null;
};

const chatContextDefaultValues: ChatContextType = {
	ws: null,
	reconnectInterval: null,
};

export const ChatContext = createContext<ChatContextType>(chatContextDefaultValues);

interface ChatProviderProps {
	children: ReactNode;
}

export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
	const ws = useRef<WebSocket | null>(null);
	const reconnectInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

	const value = useMemo(
		() => ({
			ws,
			reconnectInterval,
		}),
		[ws, reconnectInterval]
	);

	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
