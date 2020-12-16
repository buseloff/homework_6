"use strict";
/* Задание 1. Напишите функцию, которая подсчитывает сумму четных элементов массива.
 */

let lengthOfUserArray = 15;
let userArray = new Array(lengthOfUserArray);
let i,
  counter = 0,
  sumOfElements = 0;

function SumOfOddElementsOfArray(userArray) {
  for (i = 0; i < userArray.length; i++) {
    if (userArray[i] % 2 == 0) {
      sumOfElements += userArray[i];
      counter++;
    }
  }
  console.log(`Для массива = [${userArray}]`);
  console.log(
    `Сумма четных элементов массива = ${sumOfElements}, количество четных лементов в массиве = ${counter}`
  );
  return sumOfElements;
}

for (i = 0; i < userArray.length; i++) {
  userArray[i] = parseInt(Math.random() * 100);
}

SumOfOddElementsOfArray(userArray);