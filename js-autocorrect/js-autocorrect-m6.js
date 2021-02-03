/* eslint-disable arrow-body-style */
// Task-1
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(item => {
    totalPrice += item;
  });
  // Пиши код выше этой строки
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138.
console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116

// Task-2
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

  numbers.forEach(item => {
    if (item > value) {
      filteredNumbers.push(item);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5].
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5].
console.log(filterArray([1, 2, 3, 4, 5], 5)); // [].
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76].
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76].

// Task-9
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const arr = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      arr.push(number + value);
    } else {
      arr.push(number);
    }
  });
  return arr;
  // Пиши код выше этой строки
}

console.log(changeEven([1, 2, 3, 4, 5], 10)); // возвращает новый массив [1, 12, 3, 14, 5].
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // возвращает новый массив [12, 18, 3, 7, 14, 16].
console.log(changeEven([17, 24, 68, 31, 42], 100)); // возвращает новый массив [17, 124, 168, 31, 142].
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // возвращает новый массив [144, 13, 81, 192, 136, 154].

// Task-16
/*
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое'],
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика'],
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения'],
  },
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => index === array.indexOf(genre),
);
console.log(uniqueGenres);
*/

// Task-21

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

const getFriends = users => {
  return users
    .flatMap(user => user.friends)
    .filter((user, index, array) => index === array.indexOf(user));
};

// Task-23
const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));

// Task-27
const isEveryUserActive = users => users.every(user => user.isActive);
console.log(isEveryUserActive(users));

// Task-31
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed;
}, 0);
console.log(totalAveragePlaytimePerGame);

// Task-32
const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};

console.log(calculateTotalBalance(users));

// Task-36

const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт',
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// Task-37

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = books.sort(
  (firstBook, secondBook) => firstBook.author - secondBook.author,
);
// console.log(sortedByAuthorName);

const sortedByReversedAuthorName = books.sort(
  (firstBook, secondBook) => secondBook.author - firstBook.author,
);

const sortedByAscendingRating = books.sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating,
);

// const sortedByDescentingRating = books.sort((firstBook, secondBook) =>
//   secondBook.rating.localeCompare(firstBook.rating),
// );

// Task-10
// Task-10
// Task-10
// Task-10
// Task-10
