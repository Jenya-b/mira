export const isPushNotificationSupported = (): boolean =>
	'serviceWorker' in navigator && 'PushManager' in window;

export const askUserPermission = async (): Promise<NotificationPermission> =>
	Notification.requestPermission();

export const registerServiceWorker = (): Promise<ServiceWorkerRegistration> =>
	navigator.serviceWorker.register('/sw.js');

export const createNotificationSubscription = async (): Promise<PushSubscription> => {
	const serviceWorker = await navigator.serviceWorker.ready;

	return serviceWorker.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: import.meta.env.VITE_PUSH_PUBLICK_KEY,
	});
};

export const getUserSubscription = (): Promise<PushSubscription | null> =>
	navigator.serviceWorker.ready
		.then((serviceWorker) => serviceWorker.pushManager.getSubscription())
		.then((pushSubscription) => pushSubscription);
