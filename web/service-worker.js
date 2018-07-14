console.log('[service worker]');
self.addEventListener('install', (event) => {
  console.log(`[Service Worker] installed`);
});

self.addEventListener('notificationclick', (event) => {
  try {
    console.log('[Service Worker] Notification click Received.', event);
    event.notification.close();
    event.waitUntil(
      clients.openWindow(`${event.target.location.origin}/orders/${event.notification.data.id}`)
    );
  } catch (e) {
    console.error('[Service Worker]', e.message);
  }
});


self.addEventListener('push', (event) => {
  try {
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
    const notificationData = event.data.json();
    const notification = self.registration.showNotification(notificationData.title, notificationData.options);
    event.waitUntil(notification);
  } catch (e) {
    console.log(`[Service Worker] Push error`);
    console.error(e.message);
  }
});
