// 1    2 раза привет

for (let i = 1; i < 2; i++) {
    console.log ("Привет");
        
}

//2      вывести  консоль цифры  от 1 до 5
for (let i = 1; i <= 5; i++) {
    console.log (i);
}

//3     /=/=/ от 7 до 22
for (let i = 7; i <= 22; i++) {
    console.log (i);
}

//4  
let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};
for (let key in obj) {
console.log ( `${key}-зарплата ${obj[key]} долларов`);
}


//5.
let n = 1000;
let num = 0;

while (n >= 50) {
    n/= 2;
    num++;
}

console.log(n);
console.log (num);


//6.
let firstFriday = 5
for (let i = firstFriday; i<= 31; i += 7) {
    console.log (`Сегодня пятница,${i}-е число. Необходимо сдать отчет.`)
}





