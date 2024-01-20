// 1
let numbers = [ 1, 5, 4, 10, 0, 3 ];
console.log (numbers [0]); // 1
console.log (numbers [1]); // 5
console.log (numbers [2]); // 4
console.log (numbers [3]); // 10

// 1/2
const digit = [ 1, 5, 4, 10, 0, 3 ];

for (let i = 0; i < digit.length; i++) {
	if (digit[i] == 0) break;
	console.log(digit[i]);
}

// 2
const numbs = [1, 5, 4, 10, 0, 3];

numbs.forEach((el, index) => {
	console.log(`${index}: ${el}`); //2
});


// 3
let numeral = [1, 3, 5, 10, 20]
numeral = numeral.join(' ');
console.log (numeral)



//Задание 4
//С помощью вложенных циклов создайте многомерный массив вида: 
//[[1, 1, 1], [1, 1, 1], [1, 1, 1]]


//Задание 5
//Дан массив: 
//[1, 1, 1]


//Добавьте в конец массива значения 2, 2, 2.