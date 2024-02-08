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
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
  
  //3 Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».
  let currentDay = new Date();

const timer = (currentDay) => {
    const timer = setInterval(() => {        console.log(currentDay);
    }, 1000);

    setTimeout(() => {
    clearInterval(timer)  
    console.log("30 секунд прошло")
  }, 30000);
}

timer(currentDay);
