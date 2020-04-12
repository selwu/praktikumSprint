/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
  if (typeof str !== 'string') {
    alert('Введите строку');
    return false;
  }
  const arrStr = str.split(' ');
  const result = [];
  arrStr.forEach((element) => {
    result.unshift(element);
  });
  return result.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"
console.log(reverseWords(3245)); // "вы должны все их испробовать"
