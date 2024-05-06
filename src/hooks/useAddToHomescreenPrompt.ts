/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

interface IBeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{
		outcome: 'accepted' | 'dismissed';
		platform: string;
	}>;
	prompt(): Promise<void>;
}

export function useAddToHomescreenPrompt(): [IBeforeInstallPromptEvent | null, boolean] {
	const [prompt, setState] = useState<IBeforeInstallPromptEvent | null>(null);
	const [isInstalled, setIsInstalled] = useState(false);

	useEffect(() => {
		const ready = (e: IBeforeInstallPromptEvent): void => {
			e.preventDefault();
			setState(e);
		};

		window.addEventListener('beforeinstallprompt', ready as any);

		return () => {
			window.removeEventListener('beforeinstallprompt', ready as any);
		};
	}, []);

	useEffect(() => {
		const onInstall = (): void => {
			setIsInstalled(true);
		};

		window.addEventListener('appinstalled', onInstall as any);

		return () => {
			window.removeEventListener('appinstalled', onInstall as any);
		};
	}, []);

	return [prompt, isInstalled];
}
