"use strict";
/*Задание 6. Создайте и опишите объект worker. Выведите его в консоль. 
*/

function Worker(name, surname, age, experience, sex) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.experience = experience;
  this.sex = sex;
  }

  let worker1 = new Worker ("Pete", "Anderson", 25, 5, "male");
  console.log(worker1);