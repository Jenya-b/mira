function receivePushNotification(event) {
	const message = JSON.parse(event.data.text());

	event.waitUntil(
		self.registration.showNotification(message.title, {
			body: message.body,
		})
	);
}

function openPushNotification(event) {
	event.notification.close();
	event.waitUntil(clients.openWindow(event.notification.data));
}

self.addEventListener('push', receivePushNotification);
self.addEventListener('notificationclick', openPushNotification);
