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

// Петя бежит быстро, потому что Петя пытается поймать поезд.
const petya = {
  name: 'Petya',
  showName() {
    console.log(this.name);
  },
};

petya.showName();

console.dir(petya.showName)

