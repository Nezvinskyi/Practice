// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);


// const filter = function(array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithAmount); // массив с объектами apples и grapes


// -----> closures

// const createCounter = function() {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function() {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3

// console.dir(counterA.increment);
// console.dir(counterB.increment);

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// }

// makeDish('Mango', 'apple pie');
// makeDish('Mango', 'fish');
// makeDish('Mango', 'beef stew');

// makeDish('Poly', 'muffins');
// makeDish('Poly', 'pork chops');
// makeDish('Poly', 'roast beef');


// const makeShef = function (name) {
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   }
// }

// const mango = makeShef('Mango');
// mango('apple pie');
// mango('beef stew');

// const poly = makeShef('Poly');
// poly('pancakes');
// poly('eggs and bacon');

// console.dir(mango)

// ----> contex, this

// // Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showName();

// console.dir(petya.showName)

// function fn() {
//   console.log(this);
// }
// fn()

// const petya = {
//   name: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.name);
//   },
// }

// petya.showThis();
// petya.showName();

// function showThis() {
//   console.log('this is showThis', this);
// }

// showThis();

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext();

// const hotel = {
//   name: 'Resort hotel',
//   showThis() {
//     console.log(this);
//   }
// }

// const fn = function (callback) {
//   callback();
// }

// fn(hotel.showThis)

// const showThis = () => {
//   console.log('this in showThis', this);
// }
// showThis();

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext()


// const hotel = {
//   name: 'Resort hotel',
//   showThis() {
//     const fn = () => {
//       console.log('this is in fn :>> ', this);
//     };
//     fn()
//     console.log('this is in fn :>> ', this);
//   },
// };

// hotel.showThis()

// !----> methods call, apply, bind

// const greet = function () {
//   return `Wellcome to ${this.name}!`;
// }

// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel));
// console.log(greet.apply(hotel));

// !----> call arguments

// const greet = function (guest, stars) {
//   return `Dear ${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel'}

// console.log(greet.call(hotel, 'Mango', 5));
// console.log(greet.call(motel, 'Poly', 3));

// !----> apply arguments

// const greet = function (guest, stars) {
//   return `Dear ${guest}, welcome to ${stars}-star ${this.name}!`
// }

// const hotel = { name: "Resort Hotel" };
// const motel = { name: 'Sunlight Motel' };
// console.log(greet.apply(hotel, ['Mango', 5]));
// console.log(greet.apply(motel, ['Poly', 3]));

// !----> bind

// const greet = function(guest) {
//   return `${guest}, welcome to ${this.name}!`;
// };

// const hotel = { name: 'Resort Hotel' };

// const hotelGreeter = greet.bind(hotel, 'Mango');

// hotelGreeter(); // "Mango, wellcome to Resort Hotel!"


// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// }

// fn(hotel.showThis.bind(hotel))



// !----> Репета

// // ------------------коллбэки
// const greet = function (name) {
//   console.log(`Hello ${name}`);
// }

// const greetWithName = function (callback) {
//   const name = 'Mango';
//   // console.log(callback);
//   callback(name);
// }

// greetWithName(greet)

// // ---------------отложенный вызов: интервалы

// console.log('в коде перед таймаутом');
// setTimeout(function() {
//   console.log('Через 3 сек внутри колбэка в таймауте');
// }, 3000);
// console.log('в коде после таймаута');

// // --------------------------
// const handleFetchSuccess = function (data) {
//   console.log(data);
// }

// console.log('перед fetch');
// fetch('https://swapi.dev/api/people/20/')
//   .then(res => res.json())
//   .then(handleFetchSuccess)
// console.log('после fetch');

