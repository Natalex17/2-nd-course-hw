//1
const folk = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(folk.sort((a, b) => a.age > b.age ? 1 : -1));

 //2
 function isPositive(num) {
   return num > 0;                  //для чисел
  }
  function isMale(person) {
    return person.gender === 'male'; // для мужчин
  }
  function filter(array, ruleFunction) {
    const result = [];
    for (let item of array) {
      if (ruleFunction(item)) {
        result.push(item);
      }
    }
    return result;
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
  const people = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}];
  
  console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
  
  //3 Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».
  let counter = 0;

const interval = setInterval(() => {   
       console.log(new Date()); //текущее время
       counter += 3;  
       if (counter >= 30) {    //остановка интервала
        clearInterval(interval);
      
    console.log("30 секунд прошло");
       }
  }, 3000);

  //4 
  function showAd() {
    console.log('Привет, Сенсей!');
  }
  
  setTimeout(showAd, 1000 * 60);
//

  function delayForSecond0(callback) {
                                    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000 * 60);
 }
 
 delayForSecond0(function () {
    console.log('Привет, Наставник!');
 })
 

 //5

 function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}
                             // Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}
// Код выше менять нельзя
// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))







