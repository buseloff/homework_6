"use strict";
/*   Задание 2. Напишите функцию, которая возвращает общий массив из двух заданных.
 */

let lengthOfUserArray1 = 15,
  lengthOfUserArray2 = 10;
let userArray1 = new Array(lengthOfUserArray1);
let userArray2 = new Array(lengthOfUserArray2);
let i;

for (i = 0; i < userArray1.length; i++) {
  userArray1[i] = parseInt(Math.random() * 100);
}
for (i = 0; i < userArray2.length; i++) {
  userArray2[i] = parseInt(Math.random() * 100);
}

function UserConcatOfArrays(userArray1, userArray2) {
  let concatOfUserArrays = new Array(userArray1);
  let j = concatOfUserArrays.length;
  for (i = 0; i < userArray2.length; i++) {
    concatOfUserArrays[j] = userArray2[i];
    j++;
  }
  console.log(`Для массива 1 = [${userArray1}]`);
  console.log(`Для массива 2 = [${userArray2}]`);
  console.log(`Общий массив = [${concatOfUserArrays}]`);
  return concatOfUserArrays;
}

console.log(`Вариант 1`);
UserConcatOfArrays(userArray1, userArray2);


//Вариант2
console.log(`-------------------------------------------------`);
console.log(`Вариант 2`);
function UserConcatOfArrays2(userArray1, userArray2) {
  let concatOfUserArrays = userArray1.concat(userArray2);
  console.log(`Для массива 1 = [${userArray1}]`);
  console.log(`Для массива 2 = [${userArray2}]`);
  console.log(`Общий массив = [${concatOfUserArrays}]`);
  return concatOfUserArrays;
}

UserConcatOfArrays2(userArray1, userArray2);
