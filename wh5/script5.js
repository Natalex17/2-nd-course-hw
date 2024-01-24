// 1
function smalNum (a,b) {
    return a < b? a : b;
}

// 2
function checkParity(num) {
    if (num % 2 == 0){  // Проверяем четность
        return "Число четное"; // после деления на 2=0
    } else {
        return "Число нечетное" //после деления на 2 имеет остаток
    }
}

// 3
    //.1. 
function squareNum (num) {
   console.log(num * num); //выводит квадрат этого числа
}

    //.2.
function squareGet(num) { // принимает параметром число
    return num * num; //возвращает квадрат этого числа
}
// 4
function ageUser() {
    let age = prompt("Сколько вам лет?");

if (age < 0) {
    console.log ("Вы ввели неправильное значение"); //если user ввел отрицаельное число
} else if ( age <= 12) {
    console.log ("Привет, друг!") // если ввели от 0-12
} else if ( age >= 13) {
    console.log ("Добро пожаловать!") //ввели =13 или больше13
}
}

// 5
function myltiplyNumbers (a, b) { 
    if (isNaN(a) || isNaN(b)) { 
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

// 6
function randomNum() {
    let num = prompt("Введите число");
    num = Number (num); //преобразуем строку в число
    if (isNaN(num)) { //проверка isNaN
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }
}
    console.log (randomNum());

// 7
//  функция для вычисления Р круга
function getArea() {
return Math.RI * this.radius * this.radius; //формула Р круга: ПИ*радиус^2
}
function getPerimeter() {
    return 2 * Math.PI * this.radius; //формула длинны окружности: 2*пи*радиус
}
const circle1 ={
    radius: 5, //радиус круга
    getArea, // ссылаемся на функцию вычисления Р круга
    getPerimeter, //ссылаемся на /-/-/ периметра
};

const circle2 = {
    radius: 10,
    getArea,
    getPerimeter,
}

// 8 работа с макетом 
function getSeason (month) {
    if (month >= 3 && month <= 5){
        return "Весна";
    } else if (month >= 6 && month <= 8){
        return "Лето";
    } else if (month >= 9 && month <= 11){
        return "Осень";
    } else if (month == 12 || month == 1 || month == 2){
        return "Зима";
    } else {
        return "Неизвестное значение";
    }
}
 
console.log (getSeason(prompt("Введите число:")));