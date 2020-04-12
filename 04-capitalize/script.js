/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  if (typeof str !== 'string') alert('Введите строку');
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i === 0) result += str[i].toUpperCase();
    else if (str[i - 1] === ' ') result += str[i].toUpperCase();
    else result += str[i];
  }
  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
