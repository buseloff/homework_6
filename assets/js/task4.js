"use strict";
/*Задание 4. Напишите функцию перевода строки в верблюжий регистр.
 */
let userString = "сегодня хороший день";

function UserCamelCase(userString) {
  let arrayOfWords = userString.split(" ");
  let i,
    firstLetter = "";
  let camelString = "";

  for (i = 0; i < arrayOfWords.length; i++) {
    firstLetter = arrayOfWords[i].charAt(0).toUpperCase();
    arrayOfWords[i] =
      firstLetter + arrayOfWords[i].substring(1, arrayOfWords[i].length);
  }
  for (i = 0; i < arrayOfWords.length; i++) {
    camelString += arrayOfWords[i] + " ";
  }
  console.log(`Исходная строка = ${userString}`);
  console.log(`Строка в верблюжем регистре = ${camelString}`);
  return camelString;
}

UserCamelCase(userString);
