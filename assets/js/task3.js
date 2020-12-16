"use strict";
/*    Задание 3. Напишите функцию, которая возвращает общий массив из двух заданных и верните массив общий без повторов.
 */

let lengthOfUserArray1 = 10,
  lengthOfUserArray2 = 5;
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
  let concatOfUserArrays = userArray1.concat(userArray2);
  concatOfUserArrays = concatOfUserArrays.sort();
  console.log(`Для массива 1 = [${userArray1}]`);
  console.log(`Для массива 2 = [${userArray2}]`);
  console.log(`Общий массив = [${concatOfUserArrays}]`);
  for (i = 0; i < concatOfUserArrays.length - 1; i++) {
    if (concatOfUserArrays[i] == concatOfUserArrays[i + 1]) {
      concatOfUserArrays.splice(i, 1);
      --i;
    }
  }
  console.log(`Общий массив без повторов = [${concatOfUserArrays}]`);
  return concatOfUserArrays;
}

UserConcatOfArrays(userArray1, userArray2);
