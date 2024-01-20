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
let arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(j + 1); // заполняем подмассив числами
	}
}

console.log(arr);


// 5 
let numb = [1, 1, 1]
numb.push(2, 2, 2);
console.log(numb);

//6
let nuM = [9, 8, 7, 'a', 6, 5];
delete nuM [3]; // удаляем `а`
nuM = nuM.sort (); // сортируем
console.log (nuM);



//Задание 7
let rondom = [9, 8, 7, 6, 5];
if (rondom.includes(Number (prompt(`Угадай число`)))) {
    alert(`Угадал`)
} else {
    alert(`Не угадал`)

}

// 8
//let word ='abcdef'
//word = word.split();
//console.log(word);

let  word ='abcdef'
for (let item of word) {
	console.log(item);
}

//Необходимо, чтобы программа вывела в консоль 
//'fedcba'
