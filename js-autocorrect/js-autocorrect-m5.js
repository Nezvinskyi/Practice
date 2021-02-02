/* eslint-disable max-classes-per-file */
// const Storage = function (items) {
//   this.items = items;
// };

// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
//   this.getItems();
// };

// Storage.prototype.removeItem = function (item) {
//   console.log(this.items.indexOf(item));
//   if (this.items.indexOf(item) === -1) {
//     return;
//   } else {
//     const idx = this.items.indexOf(item);
//     this.items.splice(idx, 1);
//   }
//   return this.items;
// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// task-7
/*
const StringBuilder = function (baseValue) {
  this.value = baseValue;
};

StringBuilder.prototype.getValue = function () {
  return this.value;
};

StringBuilder.prototype.padEnd = function (str) {
  this.value = this.value + str;
};

StringBuilder.prototype.padStart = function (str) {
  this.value = str + this.value;
};
StringBuilder.prototype.padBoth = function (str) {
  this.value = str + this.value + str;
};

// Пиши код выше этой строки
const builder = new StringBuilder('base');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
*/

// Task-13
/*
class StringBuilder {
  constructor(baseValue) {
    this.value = baseValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='
*/

/*
// Task-16
class Car {
  static _MAX_PRICE = 50000;
  // Пиши код ниже этой строки
  static checkPrice(price) {
    if (price > this._MAX_PRICE) {
      return 'Внимание! Цена превышает допустимую.';
    } else {
      return 'Всё хорошо, цена в порядке.';
    }
  }
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
*/

/*
// Task-18
class User {
  constructor(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
console.log(mango);
*/

// Task-19
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  blacklistedEmails;
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true
