// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

const statistics = {};

const Voter = function (name) {
  this.name = name;

  this.vote = function (presidentName) {
    if (this.name in statistics) {
      console.log('double vote!');
    }
    statistics[this.name] = presidentName;
  }
}
const results = function (stats) {
  const totals = {};
  for (const vote in stats) {
    const pres = stats[vote]
    if (pres in totals) {
      totals[pres] += 1;
    } else {
      totals[pres] = 1;
    }
  }
  return totals
}

const voter1 = new Voter('voter1');
const voter2 = new Voter('voter2');
const voter3 = new Voter('voter3');
const voter4 = new Voter('voter4');
const voter5 = new Voter('voter5');
const voter6 = new Voter('voter6');
const voter7 = new Voter('voter7');
const voter8 = new Voter('voter8');
const voter9 = new Voter('voter9');
const voter10 = new Voter('voter10');
const voter11 = new Voter('voter11');

voter1.vote('President1')
voter1.vote('President1')
voter2.vote('President2')
voter3.vote('President2')
voter4.vote('President1')
voter5.vote('President3')
voter6.vote('President1')
voter7.vote('President2')
voter8.vote('President1')
voter9.vote('President3')
voter10.vote('President2')
voter11.vote('President2')


console.log(statistics);
console.log(results(statistics));