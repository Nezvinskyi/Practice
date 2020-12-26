// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

const Calculator = function () {
  this.read = function () {
    this.a = +prompt('Enter A:');
    this.b = +prompt('Enter B:');
  }

  this.sum = function () {
    return this.a+this.b
  }

  this.mul = function () {
    return this.a * this.b
  }
}

Calculator.prototype.pow = function () {
  this.read();
  return this.a ** this.b;

}

let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert("Mul=" + calculator.mul());

alert('Pow =' + calculator.pow())