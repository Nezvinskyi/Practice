// notifications

const refs = { notification: document.querySelector('.js-alert') };

let timeoutId = null;

refs.notification.addEventListener('click', notificationClickHandler);

showNotification();

function notificationClickHandler() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  refs.notification.classList.add('is-visible');
  timeoutId = setTimeout(hideNotification, 3000);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
