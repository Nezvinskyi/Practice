// notifications

const refs1 = { notification: document.querySelector('.js-alert') };

let timeoutId = null;

refs1.notification.addEventListener('click', notificationClickHandler);

showNotification();

function notificationClickHandler() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  refs1.notification.classList.add('is-visible');
  timeoutId = setTimeout(hideNotification, 3000);
}

function hideNotification() {
  refs1.notification.classList.remove('is-visible');
}

//timer

const refs2 = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  timerId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    updateClockface(0);

    const startTime = Date.now();
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      updateClockface(deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
    updateClockface(0);
    this.isActive = false;
  },
};

refs2.startBtn.addEventListener('click', timer.start.bind(timer));
refs2.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs2.clockface.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
