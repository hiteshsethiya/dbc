import Service from "./../../services";

const applicationServerPublicKey = "BEfr-TQE853v_Cp9Vz5YZlTHJ9wzeSWT2e9mkYTcsPYgaCIoXvSUyrTYETtzRlxKTwtEWrp85K5ajCdO66ved8c";

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

if ('serviceWorker' in window.navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        registration.update();
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        registration.pushManager.getSubscription()
          .then(function (subscription) {
            let isSubscribed = !(subscription === null);
            if (!isSubscribed) {
              return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlB64ToUint8Array(applicationServerPublicKey)
              }).then(function (subscription) {
                Service.addClientBrowserId(subscription).then(response => {
                  console.log('[Service Worker] User is subscribed.');
                }).catch(error => {
                  console.error('[Service Worker] Error savinf id', error.message);
                });
              }).catch(function (err) {
                console.log('Failed to subscribe the user: ', err);
              });
            }
            return console.log('[Service Worker] User is already subscribed.')
          })
      }).catch(error => console.log('Error registering ServiceWorker', error.message));
  })
}