/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
*/

function anagram(str1, str2) {
  if (str1.toUpperCase() === str2.toUpperCase()) return false;
  const str1Arr = str1.split('');
  const str2Arr = str2.split('');
  str1Arr.sort((a, b) => a.localeCompare(b));
  str2Arr.sort((a, b) => a.localeCompare(b));
  return str1Arr.join('').toUpperCase() === str2Arr.join('').toUpperCase();
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
