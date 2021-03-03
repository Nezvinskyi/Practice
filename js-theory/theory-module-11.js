// // notifications

// const refs1 = { notification: document.querySelector('.js-alert') };

// let timeoutId = null;

// refs1.notification.addEventListener('click', notificationClickHandler);

// showNotification();

// function notificationClickHandler() {
//   hideNotification();
//   clearTimeout(timeoutId);
// }

// function showNotification() {
//   refs1.notification.classList.add('is-visible');
//   timeoutId = setTimeout(hideNotification, 3000);
// }

// function hideNotification() {
//   refs1.notification.classList.remove('is-visible');
// }

// // timer

// const refs2 = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// const timer = {
//   timerId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//     updateClockface(0);

//     const startTime = Date.now();
//     this.timerId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       updateClockface(deltaTime);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.timerId);
//     this.timerId = null;
//     updateClockface(0);
//     this.isActive = false;
//   },
// };

// refs2.startBtn.addEventListener('click', timer.start.bind(timer));
// refs2.stopBtn.addEventListener('click', timer.stop.bind(timer));

// function updateClockface(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   refs2.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// // promises
// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;
//   if (success) {
//     resolve('success!');
//   }
//   const error = 'reject!';
//   reject(error);
// });

// console.log('before');
// promise
//   .then(result => console.log(`%c${result}`, 'color: green; font-size: 25px'))
//   .catch(reject => console.log(`%c${reject}`, 'color: red; font-size: 25px'));

// console.log('after');

// // chaining

// const chainedPromise = new Promise(resolve => {
//   resolve(5);
// });

// chainedPromise
//   .then(value => {
//     console.log(value);
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value);
//     return value + 50;
//   })
//   .then(value => {
//     console.log(value);
//   });

// // promisifcation

// // with callback functions
// const fetchUser = (userName, onSuccess, onError) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;

//     if (success) {
//       const user = { name: userName, age: 42, posts: 74 };
//       onSuccess(user);
//       return;
//     }
//     const error = 'Error!';
//     onError(error);
//   }, 1000);
// };

// fetchUser('Mango', onFetchUserSuccess, onFetchUserError);

// function onFetchUserSuccess(user) {
//   console.log(user);
// }
// function onFetchUserError(error) {
//   console.log(`%c${error}`, 'color: red; font-size: 25px');
// }

// // with promise

// const fetchPromissedUser = userName => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.5;

//       if (success) {
//         const user = { name: userName, age: 42, posts: 74 };
//         resolve(user);
//       }
//       const error = 'Error!';
//       reject(error);
//     }, 1000);
//   });
// };

// fetchPromissedUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// hw11/3

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const promise = new Promise((resolve, reject) => {
    const id = transaction.id;
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id, delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
  return promise;
};

function logSuccess({ id, delay: time }) {
  console.log(`Transaction ${id} processed in ${time}ms`);
}
const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
