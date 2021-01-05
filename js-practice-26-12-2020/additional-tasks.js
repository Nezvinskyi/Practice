// from Slack

// #1.
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.

// const Calculator = function () {
// 	this.methods = {
// 		'+': (a, b) => a + b,
// 		'-': (a, b) => a - b
// 	};

// 	this.calculate = function (str) {
// 		this.stringArray = str.split(' ');
// 		this.a = +this.stringArray[0]
// 		this.b = +this.stringArray[this.stringArray.length - 1]
// 		this.operator = this.stringArray[1]
		
// 		return `${str} = ${this.methods[this.operator](this.a, this.b)}`
// 	}
	
// 	this.addMethod = function (name, func) {
// 		this.methods[name] = func
// 	}
// }

// let calc = new Calculator;
// console.log(calc.calculate('3 + 7'))
// console.log(calc.calculate('3 - 7'))

// calc.addMethod("*", (a, b) => a * b)

// console.log(calc.calculate('3 * 7'));

// calc.addMethod("/", (a, b) => a / b)
// calc.addMethod("**", (a, b) => a ** b)

// console.log(calc.calculate('3 / 7'));
// console.log(calc.calculate('3 ** 7'));


// ------------>
// #2.
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// ====
// Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getRate); //выведет 10
// console.log(worker.getDays); //выведет 31
// console.log(worker.getSalary); //выведет 310 - то есть 10*31
// ====
// Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// worker.getRate; //выведет 10
// worker.getDays; //выведет 31
// worker.getSalary; //выведет 310 - то есть 10*31
// //Теперь используем сеттер:
// worker.setRate = 20; //увеличим ставку
// worker.setDays = 10; //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10


// class Worker {
// 	constructor(name, surname, rate, days) {
// 		this._name = name;
// 		this._surname = surname;
// 		this._rate = rate;
// 		this._days = days;
// 	}
// 	get getName() {
// 		return this._name
// 	}
// 	get getSurname() {
// 		return this._surname
// 	}
// 	get getRate() {
// 		return this._rate
// 	}
// 	set setRate(value) {
// 		this._rate = value;
// 	}
// 	get getDays() {
// 		return this._days
// 	}
// 	set setDays(value) {
// 		this._days = value;
// 	}
// 	get getSalary() {
// 		return this._rate * this._days;
// 	}
// }

// const worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getRate); //выведет 10
// console.log(worker.getDays); //выведет 31
// console.log(worker.getSalary); //выведет 310 - то есть 10*31

// worker.setRate = 20; //увеличим ставку
// worker.setDays = 10; //уменьшим дни
// console.log(worker.getSalary); //выведет 200 - то есть 20*10


// #3.
// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
// Наш класс должен работать так:
// var str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// class MyString {
// 	reverse(str) {
// 		this.reversedString = [...str].reverse().join('');
// 		return this.reversedString
// 	}
// 	ucFirst(str) {
// 		this.ucFirstString = str[0].toUpperCase() + str.slice(1);
// 		return this.ucFirstString
// 	}
// 	ucWords(str) {
// 		this.strArray = str.split(' ');
// 		this.newArray = [];
// 		for (const word of this.strArray) {
// 			console.log(word);
// 			this.newArray.push(word[0].toUpperCase() + word.slice(1));
// 			this.newString = this.newArray.join(' ')
// 		}
// 		return this.newString
// 	}

// }

// const string = new MyString;
// console.log(string.reverse('abcde'));
// console.log(string.ucFirst('abcde'));
// console.log(string.ucWords('every hunter whants to know'));

// #4.
// Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:
// var validator = new Validator();
// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны


class Validator {
	isEmail(str) {
		return /[a-z0-9]@[a-z0-9].[a-z]/.test(str); 
	}

}
const validator = new Validator;
console.log(validator.isEmail('1111@fsdfsd'));