// написать секундомер с кнопками старт стоп и отображением времени:
// 1. На старт нельзя нажать больше одного раза
// 2. Нажав на стоп - пауза (+текст кнопки меняется на reset), нажав повторно кнопку (reset) - обнуление.
// 3. При паузе можно нажать старт и продолжить с момента остановки
// 4. Добавить к секундам десятые = 0.6s
// 5. Когда таймер доходит до 60-ти секунд - у нас добавляется показатель минут
// 6. Добавляем 3-ую кнопку Lap (круг), при нажатии на которую фиксируется текущее значение секундомера (не останавливая его) и добавляется это значение в список на экране

const codeHere = document.querySelector("#code-here");

const ulRef = document.createElement('ul');

const arr = [
	{ title: "start", name: "start" },
	{ title: "stop/pause", name: "stop" },
	{title: "lap", name: "lap"}
];
const btn = ({ title, name }) => `<button name=${name}>${title}</button>`;

arr.forEach((el) => codeHere.insertAdjacentHTML("beforeend", btn(el)));
const span = document.createElement("span");
span.textContent = 0;
codeHere.prepend(span);
codeHere.appendChild(ulRef);
const btnStart = document.querySelector('[name = "start"]');
const btnStop = document.querySelector('[name = "stop"]');
const btnLap = document.querySelector('[name = "lap"]');

let intervalId = "";
let seconds = 590;
let minutes = 0;
const start = () => {
  const a = () => {
		seconds += 1;
		if (seconds < 600) {
			span.textContent = `${minutes}:${seconds / 10}`;
		} else {
			seconds -= 600;
			minutes += 1;
			span.textContent = `${minutes}:${seconds / 10}`;
		}
  };
  // setInterval(a, 1000);
  intervalId = setInterval(a, 100);
  btnStart.removeEventListener("click", start);
  if (btnStop.textContent === "reset") {
    btnStop.textContent = "stop/pause";
  }
};
const stop = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = "";
  }
  btnStart.addEventListener("click", start);
  if (btnStop.textContent === "reset") {
    span.textContent = 0;
  } else {
    btnStop.textContent = "reset";
  }
};

function lap() {
	const lapTime = document.createElement('li');
	lapTime.textContent = `${minutes}:${seconds/10}`;

	ulRef.append(lapTime);
}

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnLap.addEventListener('click', lap)