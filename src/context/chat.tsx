import { FC, ReactNode, createContext, useMemo, useRef } from 'react';

type ChatContextType = {
	ws: React.MutableRefObject<WebSocket | null> | null;
};

const chatContextDefaultValues: ChatContextType = {
	ws: null,
};

export const ChatContext = createContext<ChatContextType>(chatContextDefaultValues);

interface ChatProviderProps {
	children: ReactNode;
}

export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
	const ws = useRef<WebSocket | null>(null);

	const value = useMemo(
		() => ({
			ws,
		}),
		[ws]
	);

	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
