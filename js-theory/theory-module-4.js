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

// -----------------замыкания

// /* 
// * Global env
// * Record: {}
// * Parent: null
// */
// // Environment: Global env
// const foo = function () {
// /* Foo env
// * Record: {}
// * Parent: Global env
// */
//   const x = 5;
// /* Foo env
// * Record: {x: 5}
// * Parent: Global env
// */
  
//   // Environment: Foo env
//   return function () {
//     /* Anon env
//     * Record: {}
//     * Parent: Foo env
//     */
//     console.log(x);
//   }
// }
// /* 
// * Global env
// * Record: {foo: f}
// * Parent: null
// */

// const outerFn = foo();
// /* 
// * Global env
// * Record: {foo: f, outerFn: f}
// * Parent: null
// */

// console.log(outerFn);

// outerFn();


// const fnA = function (a) {
//   return function fnB(b) {
//     return function fnC(c) {
//       console.log(a,b,c);
//     }
//   }
// }
// const res = fnA(5)(10);
// res(15);
// console.dir(res);

// function numberGenerator() {
//   // Local “free” variable that ends up within the closure
//   var num = 1;
//   function checkNumber() { 
//     console.log(num);
//   }
//   num++;
//   return checkNumber;
// }

// var number = numberGenerator();
// console.log(number()); // 2

// function sayHello() {
//   const say = function() { console.log(hello); }
//   // Local variable that ends up within the closure 
//   const hello = 'Hello, world!';
//   return say;
// }
// var sayHelloClosure = sayHello(); 
// sayHelloClosure(); // ‘Hello, world!’

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?

// let name = "Pete";
// function makeWorker() {

//   return function() {
//     console.log(name);
//   };
// }

//  name = "John";

// //  makeWorker()
// // create a function
// let work = makeWorker();

// // call it
// work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)

// https://learn.javascript.ru/function-expressions
// Давайте напишем функцию ask(question, yes, no) с
// тремя параметрами:

// question: Текст вопроса
// yes: Функция, которая будет вызываться, 
// если ответ будет «Yes»
// no: Функция, которая будет вызываться, 
// если ответ будет «No»
// Наша функция должна задать вопрос question
// и, в зависимости от того, как ответит пользователь,
  // вызвать yes() или no():

// function showOk() {
//   console.log('you agreed');
// }

// function showCancel() {
//   console.log('you cancel');
// }

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask('Are you agree?', showOk, showCancel);

// или более короткий вариант

// let ask = function (question, yes, no) { 
//   if (confirm(question)) yes()
//   else no();
// }

// ask('are you agree?',
//   function() {console.log('you agreed');},
//   function() {console.log('you cancelled');}
// )

// Function Expression в сравнении с Function Declaration

// let age = prompt("Сколько Вам лет?", 18);

// // в зависимости от условия объявляем функцию
// if (age < 18) {

//   function welcome() {
//     alert("Привет!");
//   }

// } else {

//   function welcome() {
//     alert("Здравствуйте!");
//   }

// }

// // ...не работает
// welcome(); // Error: welcome is not defined

// let age = 16; // присвоим для примера 16

// if (age < 18) {
//   welcome();               // \   (выполнится)
//                            //  |
//   function welcome() {     //  |
//     alert("Привет!");      //  |  Function Declaration доступно
//   }                        //  |  во всём блоке кода, в котором объявлено
//                            //  |
//   welcome();               // /   (выполнится)

// } else {

//   function welcome() {
//     alert("Здравствуйте!");
//   }
// }

// // здесь фигурная скобка закрывается,
// // поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

// welcome(); // Ошибка: welcome is not defined

// let age = prompt("Сколько Вам лет?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Привет!");
//   };

// } else {

//   welcome = function() {
//     alert("Здравствуйте!");
//   };

// }

// welcome(); // теперь всё в порядке

// Стрелочные функции https://learn.javascript.ru/arrow-functions-basics

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes() 
//   else no()
// }
// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// );

// Рекурсия и стек https://learn.javascript.ru/recursion

// итеративное решение
// function pow(x, n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++){
//     result *= x;
//   }
//   return result;
// }

// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));

// рекурсивное решение
// function pow(x, n) {
//   if (n === 1) {
//     return x
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// или короче:

// function pow(x, n) {
//   return (n === 1) ? x : x * pow(x, n - 1);
// }
// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// 1. С использованием цикла.
// function sumTo(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++){
//     sum += i;
//   }
//   return sum
// };

// console.log(sumTo(100));

// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// function sumTo(number) {
//   if (number === 1) {
//     return number
//   } else {
//     return number+sumTo(number-1)
//   }
// }
// console.log(sumTo(100));

// 3. С использованием формулы арифметической прогрессии.
// function sumTo(number) {
//   const sum = number * (1 + number) / 2;
//   return sum
// };
// console.log(sumTo(100));

// // Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// function factorial(n) {
//   return (n===1)? n: n*factorial(n-1)
// }
// console.log(factorial(6));

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   let a = 1;
//   let b = 1;

//   for (let i = 3; i <= n; i++){
//     let sum = a + b;
//     a = b;
//     b = sum;

//   }
// return b

// };

// console.log(fib(3));
// console.log(fib(7));
// console.log(fib(77));

// // Остаточные параметры и оператор расширения https://learn.javascript.ru/rest-parameters-spread-operator

// function sum(a, b) {
//   return a + b;
// }

// console.log( sum(1, 2, 3, 4, 5) );

// function sumAll(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum
// }
// console.log( sumAll(1, 2, 3, 4, 5) );

// function showName(firstName, lastName, ...titles) {
//   console.log(firstName + ' ' + lastName);
//   console.log(titles);
//   console.log(arguments[1]);

// }
// showName("Юлий", "Цезарь", "Консул", "Император");

// // Замыкание https://learn.javascript.ru/closure

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     console.log(name);
//   };
// }

// let name = "John";


// // create a function
// let work = makeWorker();

// // call it
// work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)

// function sayHiBye(firstName, lastName) {

//   // функция-помощник, которую мы используем ниже
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log( "Hello, " + getFullName() );
//   console.log( "Bye, " + getFullName() );

// }

// console.log(sayHiBye('Dmitry', 'Nezvinskyi'));

// // Конструктор?

// function user(name) {
//   this.sayHi = function() {
//     return `Hi ${name}`
//   };
// };
// user('Dmitry')


// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   }
// }
// let counter = makeCounter();

// console.log(makeCounter()());
// console.log(counter());
// console.log(counter());

// Напишите функцию sum, которая работает таким 
// образом: sum(a)(b) = a + b.
// Да, именно таким образом, используя двойные
// круглые скобки(не опечатка).

// function sum(a){
//   return function (b) {
//     return a + b
//   };
// };

// console.log(sum(1)(2));

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b
//   };
// };
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(1,5)));
 
// function inArray(arr) {

//   return function (x) {
//     console.log(x);
//     return arr.includes(x)
//   };
// };
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log( arr.filter(inArray([1, 2, 3, 10])))

// Sorting array
// let points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());
// console.log(points.sort(function(a,b) {return a-b}));


// // object sorting
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
//   {name: "Gregor", age: 40, surname: "Abendale"},
// ];

// function bySurname(surname) {
//   return (a, b) => a[surname] > b[surname] ? 1 : -1
// };

// let ageSorted = users.slice().sort(function(a,b) {return a.age-b.age});
// let nameSorted = users.slice().sort(function (a, b) {
//   if (a.name.toLowerCase() > b.name.toLowerCase()) {
//     return 1
//   } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
//     return -1
//   } else {
//     return 0
//   }
// })

// let surnameSorted = users.sort(bySurname('surname'));

// console.table(users); 
// console.table(ageSorted);
// console.table(nameSorted);
// console.table(surnameSorted);

// function makeArmy() {
//   let shooters = [];

  
//   for (let i = 0; i < 10; i++){
//     let shooter = function() { // функция shooter
//       console.log( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);

//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function() { // функция shooter
//       console.log( j ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };

// let user = makeUser();

// console.log( user.ref.name ); // Каким будет результат?

// let calculator = {
//   read() {
//     this.a = +prompt('a');
//     this.b = +prompt('b');
//     console.log(this.a,this.b);
//   },
//   sum() {
//     this.read();
//     return this.a + this.b;
//   },
//   mul() {
//     this.read();
//     return this.a * this.b;
//   },
// };

// // calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
  }
};

ladder.up().up().down().up().down().showStep(); // 1