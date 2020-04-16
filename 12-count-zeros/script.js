/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 *
 */

function countZeros(n) {
  if (typeof n !== 'number') alert('error');
  let result = 0;

  const countNumber = function (num) {
    const str = String(num);
    for (let s = 0; s < str.length; s += 1) {
      if (str[s] === '0') result += 1;
    }
  };

  for (let i = 1; i <= n; i += 1) {
    countNumber(i);
  }

  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
