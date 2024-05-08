import { useEffect, useState } from 'react';

import { useSubscriptionMutation } from '@/services/api/pushNotification';
import {
	createNotificationSubscription,
	getUserSubscription,
	isPushNotificationSupported,
} from '@/utils/pushNotification';

const pushNotificationSupported = isPushNotificationSupported();

interface ErrorNotification {
	name: string;
	message: string;
	code: number;
}

export const usePushNotifications = (): {
	onClickSusbribeToPushNotification: () => void;
	userSubscription: PushSubscription | null;
	error: ErrorNotification | null;
	loading: boolean;
	pushNotificationSupported: boolean;
} => {
	const [userSubscription, setUserSubscription] = useState<PushSubscription | null>(null);
	const [error, setError] = useState<ErrorNotification | null>(null);
	const [loading, setLoading] = useState(true);
	const [fetchSub] = useSubscriptionMutation();

	useEffect(() => {
		setLoading(true);
		setError(null);
		const getExixtingSubscription = async (): Promise<void> => {
			const existingSubscription = await getUserSubscription();
			setUserSubscription(existingSubscription);
			setLoading(false);
		};
		getExixtingSubscription();
	}, []);

	const onClickSusbribeToPushNotification = (): void => {
		setLoading(true);
		setError(null);
		createNotificationSubscription()
			.then((subscrition) => {
				setUserSubscription(subscrition);
				fetchSub({ settings: subscrition });
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	};

	return {
		onClickSusbribeToPushNotification,
		userSubscription,
		error,
		loading,
		pushNotificationSupported,
	};
};
