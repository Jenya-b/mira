function receivePushNotification(event) {
	const message = JSON.parse(event.data.text());

	const url = 'https://mirahelps.online/';

	const notificationPromise = self.registration.showNotification(message.title, {
		body: message.body,
		data: {
			url,
		},
	});

	event.waitUntil(notificationPromise);

	if (url && url !== 'null') {
		event.waitUntil(clients.openWindow(url));
	} else {
		console.error('URL is not defined or is null:', url);
	}
}

function openPushNotification(event) {
	event.notification.close();
	const url = event.notification.data.url;
	event.waitUntil(clients.openWindow(url));
}

self.addEventListener('push', receivePushNotification);
self.addEventListener('notificationclick', openPushNotification);
