async function getFruit(name) {
  const fruits = {
    strawberry: 'str',
    kiwi: 'ki',
    apple: 'apl',
  };
  // return Promise.resolve(fruits[name]);3
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500),
  );
}

// async function aMakeSmoothie() {
//   console.time('aMakeSmoothie');
//   const apple = await getFruit('apple');
//   console.log(apple);
//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);
//   console.timeEnd('aMakeSmoothie');
// }

// parallel promoises
async function aMakeSmoothie() {
  console.time('aMakeSmoothie');
  const apple = getFruit('apple');
  const kiwi = getFruit('kiwi');
  const fruits = await Promise.all([apple, kiwi]);
  console.log(fruits);
  console.timeEnd('aMakeSmoothie');
}

aMakeSmoothie();

function makeSmoothie() {
  getFruit('apple').then(apple => {
    console.log(apple);
    getFruit('kiwi').then(kiwi => console.log(kiwi));
  });
}

// makeSmoothie();

// async function fn() { }
// const fn = async function () { }
// const arr = async () => { }
// const x = {
// 	async getname()
// }
// class X {
// 	async getName(){}
// }

//error handling
// try...catch

async function aErrorMakeSmoothie() {
  try {
    console.time('aErrorMakeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const berry = getFruit('strawberry');
    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);
    return fruits;
    console.timeEnd('aErrorMakeSmoothie');
  } catch (error) {
    console.log('Error ' + error);
  }
}

aErrorMakeSmoothie().then(fruits => console.log(fruits));
