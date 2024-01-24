// 1
let numbers = [ 1, 5, 4, 10, 0, 3 ];
console.log (numbers [0]); // 1
console.log (numbers [1]); // 5
console.log (numbers [2]); // 4
console.log (numbers [3]); // 10

// 1/2
const digit = [ 1, 5, 4, 10, 0, 3 ];

for (let i = 0; i < digit.length; i++) {
	console.log(digit[i]);
	if (digit[i] === 10) break;
	
}

// 2
const numbs = [1, 5, 4, 10, 0, 3];
const index = numbs.indexOf(4);
console.log(index); //2



// 3
let numeral = [1, 3, 5, 10, 20]
numeral = numeral.join(' ');
console.log (numeral)



// 4
//С помощью вложенных циклов создайте многомерный массив вида: 
//[[1, 1, 1], [1, 1, 1], [1, 1, 1]]
let arr = [];
for (let i = 0; i < 3; i++) {
	let innerArr = []; // создаем подмассив
	
	for (let j = 0; j < 3; j++) {
		innerArr.push(1); // заполняем подмассив числами
	}
	arr.push(innerArr);
}
console.log(arr);


// 5 
let numb = [1, 1, 1]
numb.push(2, 2, 2);
console.log(numb);

// 6
let nuM = [9, 8, 7, 'a', 6, 5];
nuM.sort((a, b) => a -b).pop();
console.log (nuM);



// 7
let rondom = [9, 8, 7, 6, 5];
if (rondom.includes(Number (prompt(`Угадай число`)))) {
    alert(`Угадал`)
} else {
    alert(`Не угадал`)

}

// 8
const word ='abcdef';
const reversedWord = word.split(``).reverse().join(``);	
console.log(reversedWord); // в консоль 'fedcba'

// 9
const array= [[1, 2, 3,],[4, 5, 6]];
const flatArray = array.flat(); //flat для преобразования двумерный в одномерный массив
console.log(flatArray); // в консоль [1, 2, 3, 4, 5, 6]

// 10
const mass = [2, 9, 4, 5, 1, 8]; // массив от1-10
for ( let i = 0; i < mass.length - 1; i++) {
	console.log (mass[i]+mass[i + 1]); //сумма текущего и последующего числа
}
// 11
function getSquaredNumbers (arr) {
	return arr.map(num => num * num);
}

// 12
function getLengthWords(words) {
	return words.map(word => word.length);
}

// 13
  function filterPositive(array) {

    let result = []; 

    for (let i = 0; i < array.length; i++) {

        if (array[i] < 0) {
            negative.filter(array[i]) 
        }
    } return result;
}
 const filterPositive2 =(array) => array.filter(item => item <0)
 
filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -


// Старая версия фильтра приведёт к ошибке в консоли. Позже надо доработать