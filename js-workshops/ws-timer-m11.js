//timer

const refs2 = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  timerId: null,
  start() {
    const startTime = Date.now();
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      updateClockface(deltaTime);
    }, 1000);
    refs2.startBtn.disabled = true;
  },
  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
    updateClockface(0);
    refs2.startBtn.disabled = false;
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
