"use strict";
/*Задание 7.Создайте и опишите объект worker. Выведите его в консоль. 
      Добавьте в него функцию (встроенные методы): вывести ФИО, начислять доплату 5%, 
      если выслуга лет больше 5 лет и 10% если выслуга лет больше 8 лет.*/

let worker1 = {
  name: "Pete",
  surname: "Anderson",
  age: 25,
  experience: 6,
  sex: "male",
  additionToSalary: 0,
  writeFullName: function () {
    return "Имя = " + this.name + ", " + "Фамилия = " + this.surname;
  },
  modifySalary: function () {
    if (this.experience > 5 && this.experience <= 8) {
      this.additionToSalary = 5;
    }
    if (this.experience > 8) {
      this.additionToSalary = 10;
    }
  },
};
console.log("Вызов функции вывода полного имени");
console.log(worker1.writeFullName());
console.log("Доплата до вызова функции начисления доплаты = " + worker1.additionToSalary);
worker1.modifySalary();
console.log("Доплата после вызова функции начисления доплаты = " + worker1.additionToSalary);
