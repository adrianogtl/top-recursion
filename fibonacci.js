function fibs(num) {
  const fibArr = [];
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      fibArr.push(i);
    } else {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
  }
  return fibArr;
}

console.log("fibs: " + fibs(8));

function fibsRec(num) {
  function fib(num) {
    if (num <= 1) {
      return num;
    }

    return fib(num - 2) + fib(num - 1);
  }

  return Array(num)
    .fill(0)
    .map((_, i) => fib(i));
}

console.log("fibsRec: " + fibsRec(8));
