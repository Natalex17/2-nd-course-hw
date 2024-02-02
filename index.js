function seasonsButton() {
let number = Number(prompt(`Введите номер месяца!`));

if (number === 12 || number === 1 || number === 2) {
    alert `Зима!`;
} else if (number === 3 || number === 4 || number === 5) {
    alert `Весна!`;
} else if (number === 6 || number === 7 || number === 8) {
    alert `Лето!`;
} else if (number === 9 || number === 10 || number === 11) {
    alert `Осень!`;                                  
} else {
     alert `Неизвестный месяц!`;
    }

}
  

function seasonsBtn() {
    
    let words = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    let wordsfirst = prompt (`Назовите первое слово`).
    toLowerCase();
    let wordsLast = prompt (`Назовите последнее слово`).
    toLowerCase();

    if (wordsfirst === words [0] || wordsfirst === words[- 1])
     {
        alert `Это правильный ответ!`;

    } else if (wordsLast !== words[0] || wordsLast !== words[- 1] ) {
        alert `Вы не угадали!`;                             
    } 
    else {
         alert `А счастье было так близко!`;
        }
    
    }
    