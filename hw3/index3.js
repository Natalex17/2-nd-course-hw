//1.
let password = `пароль`;
let userInput = (prompt("Введите пароль"));  //Читается
alert (password);  
           // доработать поверку !!!
if (userInput === password) 
    alert( 'Пароль введен верно' );
   else {
    alert( 'Пароль введен неправильно' );}  //читается


//2.                                 
let c = 5
if  (c > 0&& c < 10 ) {
    console.log ( `Верно`)
} else {console.log ( `Неверно`)}


                                                          


//3.
let d = 102 
let e = 50 
if (d > 100 || e > 100) { console.log (`Верно`);
} else { console.log (`Неверно`);
}
  

 //4.
let a = '2';
let b = '3';     // Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number (a) +Number (b));

//5.
let monthNumber = 12
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert(`Зима`);
        break;
    case 3:
    case 4:
    case 5:
        alert(`Весна`);
        break;   
    case 6:
    case 7:
    case 8:
        alert(`Лето`);
        break;        
    case 9:
    case 10:
    case 11:
        alert(`Осень`);
        break;
                        
default: alert(`Неизвестный месяц`)

    }
    