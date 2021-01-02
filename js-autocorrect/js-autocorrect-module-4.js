// // Task 2/10
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Роял гранд', makePizza));
// console.log(makeMessage('Роял', deliverPizza));



// // Task 3/10

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName){
//   console.log(`Едим пиццу ${pizzaName}.`);
// });



// -------> Task 4/10
// ---> Theory
// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }
// processCall('Манго');

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

// // -------> Task 4/10
// // ---> 

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
      
//     }

//    return onError(pizzaName)
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   console.log(`Ошибка! ${error}`);
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);
// console.log('object');

// // -------> Task 5/10

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(pizzaPalace.order('Аль Копчино'));
// console.log(pizzaPalace.order('Четыре нарезона'));
// console.log(pizzaPalace.order('Биг майк'));
// console.log(pizzaPalace.order('Венская'));

// // -------> Task 6/10
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


// // -------> Task 7/10
// // ----> Theory
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: 'Манго' };
// const poly = { username: 'Поли' };

// greetGuest.call(mango, 'Добро пожаловать');
// // Добро пожаловать, Манго.

// greetGuest.call(poly, 'С приездом');
// // С приездом, Поли.


// -------> Task 7/10
// ----> 
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position+1}-й в очереди.`
}


// composeMessage.call(orders,0);
const messages = orders.map(obj => composeMessage.call(obj, orders.indexOf(obj)));
console.log(messages);
