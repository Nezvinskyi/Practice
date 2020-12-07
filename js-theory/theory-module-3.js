// // 2. Создание объекта

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log('hotel :>> ', hotel);

// // 3. Доступ к свойствам

// console.log('hotel.name :>> ', hotel.name);
// console.log('hotel[stars] :>> ', hotel['stars']);

// hotel.manager = 'Smith';
// console.log('hotel :>> ', hotel);

// // 4. Удаление свойств

// delete hotel.manager;
// console.log('hotel :>> ', hotel);

// // 6. Короткие свойства

// let name = 'Resort Hotel';
// let stars = 5;

// // Эта ES5 запись избыточна
// const es5hotels = {
//   name: name,
//   stars: stars,
//   capacity: 100,
// };

// console.log('es5hotels :>> ', es5hotels);

// const es6hotels = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(es6hotels);

// // 7. Вычисляемые свойства
// const key = 'person';
// const object = {};

// object[key] = 'Mango';

// console.log('object :>> ', object);

// const key = 'person';

// const getKey = function () {
//   return 'age'
// };

// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// }
// console.log(object);


// // 2. Цикл for...in
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// console.log('hotel :>> ', hotel);

// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// //3. Object.keys(), Object.values(), Object.entries()
// console.log(Object.keys(hotel));
// console.log(Object.values(hotel));
// console.log(Object.entries(hotel));

// const keys = Object.keys(hotel);

// for (const key of keys) {
//   console.log('hotel[key] :>> ', hotel[key]);
// }

// for (const entry of Object.entries(hotel)) {
//   console.log(`key :>> ' ${entry[0]}, value :>> ', ${entry[1]}`);
// }

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// console.log('goods :>> ', goods);

// console.log(Object.values(goods));
// let total = 0;
// for (const value of Object.values(goods)) {
//   total += value;
// }
// console.log('total goods :>> ', total);

// // 2. Операция spread
// // 2.1. Распыление аргументов
// const temperatures = [18, 14, 12, 21, 17, 29];
// console.log(Math.min(temperatures));

// console.log(Math.min(...temperatures));

// // 2.2. Распыление массивов
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const slicedHouses = houses.slice();
// const spreadHouses = [...houses];
// console.log('before');
// console.log('houses :>> ', houses);
// console.log('slicedHouses :>> ', slicedHouses);
// console.log('spreadHouses :>> ', spreadHouses);
// console.log('houses===slicedHouses :>> ', houses===slicedHouses);
// console.log('change');
// houses[0]= '0erryn'
// slicedHouses[0] = 'Berryn'
// spreadHouses[0] = 'Cerryn'

// console.log('after');
// console.log('houses :>> ', houses);
// console.log('slicedHouses :>> ', slicedHouses);
// console.log('spreadHouses :>> ', spreadHouses);

// // 2.3. Распыление объектов
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign({}, a, b);
// console.log('c :>> ', c);

// const d = {...a, ...b}
// console.log('d :>> ', d);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, z: 15, ...b };

// console.log('c :>> ', c);

// const lion = { hasTail: true, legs: 4 };
// const eagle = { canFly: true };

// const chimera = { ...lion, ...eagle };
// console.log('chimera :>> ', chimera);

// // 3. Операция rest
// const add = function (value, ...args) {
//   console.log('value :>> ', value);
//   console.log('args :>> ', args);
// }

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);