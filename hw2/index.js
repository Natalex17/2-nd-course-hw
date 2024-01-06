// 1.
let ad = 10;
alert (ad);
ad = ad + 10;
alert (ad)
// доработать ?

//2.
const releaseIfpone1 = 2007;
alert (releaseIfpone1);

//3.
let userName = "BrendanEich"; // Имя разработчика javaScript
alert (userName);

//4.
let ap = Number (10);
let up = Number (2);
    let result = ap + up;
    alert (result);

    let subtraction = ap - up;
    alert (subtraction);

    let multiplication = ap * up;
    alert (multiplication);
    
    let division = ap / up;
    alert (division);

//5.
    let power = up **=5;
    alert (power);

//6.
let a = 9;
let b = 2;
let newDivision = a % b;
alert (newDivision);

//7.
let nume = 1;
nume += 5;
nume -= 3;
nume *= 7;
nume /= 3;
nume ++;
nume --;
alert (nume);


//8.
let age = Number(prompt("Сколько вам лет"));
alert (age);

//9.
const User = {
    name: "Natali",  //string
    age: 43,      //number
    isAdmin: true,
} //надо доработать т додумать не поняла

//9.1

//9.2

//9.3

//9.4
let info = prompt ( "Что вы хотите узнать о пользователе?", "name");
console.log(User [info]);

//10
let name = String(prompt("Как ваше имя"));
alert('Привет,' + name);