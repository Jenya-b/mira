import { useEffect, useState } from 'react';

import { useSubscriptionMutation } from '@/services/api/pushNotification';
import {
	askUserPermission,
	createNotificationSubscription,
	getUserSubscription,
	isPushNotificationSupported,
	registerServiceWorker,
} from '@/utils/pushNotification';

const pushNotificationSupported = isPushNotificationSupported();

interface ErrorNotification {
	name: string;
	message: string;
	code: number;
}

export const usePushNotifications = (): {
	onClickAskUserPermission: () => void;
	onClickSusbribeToPushNotification: () => void;
	onClickSendSubscriptionToPushServer: () => void;
	onClickSendNotification: () => void;
	pushServerSubscriptionId: string | null;
	userConsent: NotificationPermission;
	userSubscription: PushSubscription | null;
	error: ErrorNotification | null;
	loading: boolean;
	pushNotificationSupported: boolean;
} => {
	const [userConsent, setSuserConsent] = useState<NotificationPermission>(Notification.permission);
	const [userSubscription, setUserSubscription] = useState<PushSubscription | null>(null);
	const [pushServerSubscriptionId, setPushServerSubscriptionId] = useState<string | null>(null);
	const [error, setError] = useState<ErrorNotification | null>(null);
	const [loading, setLoading] = useState(true);
	const [fetchSub] = useSubscriptionMutation();

	useEffect(() => {
		if (pushNotificationSupported) {
			setLoading(true);
			setError(null);

			registerServiceWorker().then(() => {
				setLoading(false);
			});
		}
	}, []);

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

	const onClickAskUserPermission = (): void => {
		setLoading(true);
		setError(null);
		askUserPermission().then((consent) => {
			setSuserConsent(consent);

			if (consent !== 'granted') {
				setError({
					name: 'Consent denied',
					message: 'You denied the consent to receive notifications',
					code: 0,
				});
			}
			setLoading(false);
		});
	};

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

	const onClickSendSubscriptionToPushServer = async (): Promise<void> => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(`http://localhost:8080/subscription`, {
				credentials: 'omit',
				headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors' },
				body: JSON.stringify(userSubscription),
				method: 'PATCH',
				mode: 'cors',
			});
			const data = await response.json();
			setPushServerSubscriptionId(data.id);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setError(err as ErrorNotification);
		}
	};

	const onClickSendNotification = async (): Promise<void> => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`http://localhost:8080/subscription/${pushServerSubscriptionId}`,
				{
					credentials: 'omit',
					headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors' },
					method: 'GET',
					mode: 'cors',
				}
			);
			const data = await response.json();
			setPushServerSubscriptionId(data.id);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setError(err as ErrorNotification);
		}
	};

	return {
		onClickAskUserPermission,
		onClickSusbribeToPushNotification,
		onClickSendSubscriptionToPushServer,
		onClickSendNotification,
		pushServerSubscriptionId,
		userConsent,
		userSubscription,
		error,
		loading,
		pushNotificationSupported,
	};
};
