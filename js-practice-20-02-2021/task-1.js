'use strict';
// function foo() {
//   let total = 0;
//   function add(n) {
//     total += n;
//     console.log(this);
//     return this;
//   }
//   function result() {
//     return total;
//   }
//   console.log(this);
//   return {
//     add,
//     result,
//   };
// }
// const prev = foo();
// const next = foo();

// console.log(prev);
// prev.add(1).add(2).result(); // 3
// console.log(prev.add(1).add(2).result());
// console.log(next.add(2).add(2).add(3).result());

function counter() {
  let total = 0;
  function increment() {
    this.total += 1;
    total += 1;
  }
  function decrement() {
    this.total -= 1;
    total -= 1;
  }

  return {
    increment,
    decrement,
    show() {
      return this.total;
    },
    showThis() {
      console.log(this);
    },
    total,
  };
}

const count1 = counter();
const count2 = counter();

// count1.increment();
// count1.increment();
// count1.increment();
// console.log(count1.total);

count2.increment();
count2.increment();
// console.log(count1.show());
// console.log(count2.show());

function bar(cbAct, cbShow) {
  cbAct();
  console.log(cbShow());
}

const cbAct1 = count1.increment.bind(count1);
const cbShow1 = count1.show.bind(count1);
bar(cbAct1, cbShow1);
bar(cbAct1, cbShow1);
bar(cbAct1, cbShow1);
bar(cbAct1, cbShow1);
bar(cbAct1, cbShow1);

// count1.showThis();
