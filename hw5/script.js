
// 1
//Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.

function getMin (a, b) {
    return a < b? a : b;
  }
        
  
  //Задание 2
  //Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.f
  
  function checkParity (num) {
     if (num % 2 === 0) { // проверяем четность числа если число делится без остатка то четный
      return "Число четное";
     } else {
      return "Число нечетное";
     }
  }
  
  
  //3
  function printSquare (num) {
      console.log (num * num); //вводим в консоль квадрат заданного числа
  }
  
  function getSquare (num) {
      return num *num;   //возвращаем квадрат задданного  числа
  }
  
  //4 
  function greetUser () {
      let age = prompt ("Сколько вам лет?");
      if ( age < 0) { 
          console.log ("Вы ввели неправильное значение");
      } else if (age <= 12) {
          console.log("Привет, друг!");
      } else { 
          console.log("Добро пожаловать!")
      }
  }
  
  //5
  function multiplyNumbers(a, b) {
      if (isNaN(a) || isNaN(b)) { //Проверяем являются л значения числами isNaN
          return `Одно или оба значения не являются числом`;
      } else {
          return a * b;
      }
  }
  
  //6
  function cubeNumber () {
      let num = prompt ("Введите число:");
      num = Number(num); //Преобразуем строку в число
      if (isNaN(num)) {
          return `Переданный параметр не является числом`;
      } else {
        return `${num} в кубе равняется ${num ** 3}`;
     }
    }
  console.log(cubeNumber());
  
  
  //7    
  //фунцция для вычисления P круга
  function getAreal( ) {
      return Math.PI * this.radius * this.radius; //формула площади  круга: ПИ *радиус^2
  }
  // вычисляем периметр круга
  function getPerimeter() {
      return 2 * Math.PI * this.radius; // формула длинны окружности: 2 * Пи * радиус
  
  }
  
  // 
  const circle1 = {
      radius: 5,    //задаем радиус круга
      getAreal,  //ссылка на функцию вычисления Р
      getPerimeter, 
  };
  
  const circle2 = {
      radius: 10,    //задаем радиус круга
      getAreal, 
      getPerimeter, 
  };

 
    


