// 1.
let ad = 10;
alert (ad);
ad = 20;
alert (ad)


//2.
const releaseIfpone1 = 2007;
alert (`Первый iphone был выпущен в ${releaseIfpone1} году`);

//3.
const userName = "BrendanEich"; // Имя разработчика javaScript
alert (`Создатель языка JavaScript ${userName}`);

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
    nume: "Natali",  //string
    age: 43,      //number
    isAdmin: true,
}     
                

// 9.1
console.log (User)
User[`city of residence`] = "Chita";

//9.2
User.age = 35;

//9.3
delete User [`city of residence`];


//9.4
let info = prompt ("Что вы хотите узнать о пользователе?");
console.log(User [info]);

//10
let name = String(prompt("Как ваше имя"));
alert('Привет,' + name);
