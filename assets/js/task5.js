"use strict";
/* Задание 5. Напишите функцию, которая дополняет нулями целое число до оказанной длины.
       Проработайте вариант с отрицательными числами. Например, fun(-4,6) вернет -000004. */

let userNumber = parseInt(prompt("Введите число", -25));
let lengthOfModifNumber = 8;

function ModifyOfNumber(userNumber, lengthOfNumber) {
  let userNumberAsString = userNumber.toString();
  let modifyNumber, i;
  let lengthOfUserNumber = userNumberAsString.length;
  if (userNumber < 0) {
    modifyNumber = "-";
    for (i = 0; i < lengthOfModifNumber - lengthOfUserNumber + 1; i++) {
      modifyNumber += "0";
    }
    modifyNumber += userNumberAsString.substring(1, lengthOfUserNumber);
  } else {
    modifyNumber = "";
    for (i = 0; i < lengthOfModifNumber - lengthOfUserNumber; i++) {
      modifyNumber += "0";
    }
    modifyNumber += userNumberAsString.substring(0, lengthOfUserNumber);
  }
  console.log(`Исходное число = ${userNumber}`);
  console.log(`Модифицированное число = ${modifyNumber}`);
  console.log(`Длина = ${lengthOfModifNumber}`);
}

ModifyOfNumber(userNumber, lengthOfModifNumber);
