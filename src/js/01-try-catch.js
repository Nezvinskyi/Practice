console.log('1');

setTimeout(() => {
  try {
    bar;
  } catch (error) {
    console.log('error');
  }
}, 1000);

console.log('after try-catch');
