//1 РАБОТАЕТ !!!
console.log("алфавит".toUpperCase()); 


//2  !!!
 
 function searchStart(arr, str) {

  const arrSta = [];

  arr.forEach((el) => {
      if (el.toLowerCase().startsWith(str)) {
          arrSta.push(el);
      }
  });

  return arrSta;
}
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

 
 //3 РАБОТАЕТ !!!

 function getRandomInt(min, max) {
     return Math.round(32.58884); //до ближ. целого 33 почему NAN?
    }  console.log (getRandomInt());

  function getRandomInt1 (max) {
    return Math.ceil(32.58884);  // до большего целого 33
    } console.log (getRandomInt1());

  function getRandomInt2 (min) {
    return Math.floor(32.58884)  //до меньшего целого 32
    } console.log (getRandomInt2());




//4

const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Наименьшее число: ${min}`); //21
console.log(`Наибольшее число: ${max}`); //77

//5 

function getRandom() {
  return Math.random();
}
function randomInteger(min, max) {    // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
 console.log( randomInteger(1, 10) );


 //6  Работает!!!
function getRandomInt(minValue, maxValue) {
   
return Math.round (Math.random() * (maxValue- minValue)) + minValue;

}
console.log(getRandomInt(5, 10));


//7 Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.

//НАДО ПОДУМАТЬ

function getRandomInt(min, max) {
 return Math.round(Math.random() * (max - min) + min); 
} console.log(getRandomInt(1, 5))


  // 8 

  let currentDate = new Date();
  console.log(currentDate);  //ВОЗМОЖНО РАСМСМОТРЕТЬ ДРУГОЙ СПОСОБ


  
//9 Работает

let currentDate1 = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate); //... апрель 2024

//10 
function ruDateTime() {
    const myDate = new Date();
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let ruDateTime = "Дата:" + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " " + days[myDate.getDay()] + "." + "Время:" + myDate.toLocaleTimeString();
    return ruDateTime;
}
ruDateTime();
console.log(ruDateTime())




  
  









