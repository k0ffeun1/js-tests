// Операторы

// IF
// if (УСЛОВИЕ (надо обязательно чтобы считывался результат булевыми значениями (true или false))) {
    // внутри фигурных скобок - тело объекта, выводится только TRUE
// } else - выводится когда ложное
// else if произойдет только в том случае, если основной if - будет ложью
// если в конструкции будет много веток if, else if то будет считываться сверху вниз:

// console.log('Начало');
// const userName = 'Валентин'
// if (userName === 'Сергей') {
//     console.log('Ты пидор');
// } else if (userName === 'Валентин') {
//     console.log('Ты гей');
// } else if (userName === 'Олег') {
//     console.log('Ты ваще еблан');
// } else {
//     console.log('Ты долбаеб, а не ' + userName);
// }

// SWITCH - проверяет несколько различных if именно на равенство
// console.log('Начало');
// const userName = 'Валентин'
// switch (userName) {
//     case 'Валентин':  // case - это двери, если выполняется это, то это выполнится и проверит следующий case
//         console.log('Ты гей');
//         break // break - позволяет останавливать операцию, после выполнения условия
//     case 'Сергей':
//         console.log('Ты пидор');
//         break // break - позволяет останавливать операцию, после выполнения условия
//     case 'Олег': 
//         console.log('Ты ваще еблан');
//         break // break - позволяет останавливать операцию, после выполнения условия
//     default:
//         console.log('Ты долбаеб, а не ' + userName);
//         break // break - позволяет останавливать операцию, после выполнения условия
// }
// console.log('Конец');


// УСловный оператор
const age = 27

// if ('Привет') { 
//     console.log('hello');
// } // hello, это значит что условие - ('Привет') - true?

// K false мы относим:
// false, 
// 0, 
// -0, 
// null, 
// undefined, 
// 0n (bigint), 
// '' (пустая строка), 
// NaN
// ВСЕ ОСТАЛЬНОЕ ЭТО - TRUE
// операции сравнение - это  == и ===
// == это нестрогое сравнение
// === это строгое сравнение. При такой операции сначала сравниваются типы данных. 
// Если типы данных отличаются, то строгое сравнение сразу выкидывает false. 
// Всегда использовать строгое сравнение (===) и строгое несравнение (!==)

// Сравнение строк
// console.log('hello' === 'hello'); //true
// console.log('hello' !== 'hello'); //false
// console.log('hello' === 'hell1'); //false
// console.log('hello' !== 'hell1'); //true
//-----------------------------------------
// console.log('a' > 'b'); //false
// console.log('a' < 'b'); //true
// // У каждого символа есть свой код, вот допустим у буквы 'a' он следующий
// console.log('a'.charCodeAt(0)); // 97
// // У буквы 'b' следующий
// console.log('b'.charCodeAt(0)); // 98
// // У буквы 'c' следующий
// console.log('c'.charCodeAt(0)); // 99
// // Именно поэтому буква 'b' больше чем буква 'a', ибо его код 98, а у буквы 'a' 97

// МОДАЛЬНЫЕ ОКНА
// Задание калькулятор

// let number1 = prompt('введите первое число')
// let number2 = prompt('введите второе число')
// let result = prompt('Введите действие которое хотите сделать', '"Сложить","Вычесть","Умножить","Разделить"')

// if (result === 'Сложить') {
//     alert(Number(number1) + Number(number2))
// } else if (result === 'Вычесть') {
//     alert(Number(number1) - Number(number2)) 
// } else if (result === 'Умножить') {
//     alert(Number(number1) * Number(number2)) 
// } else if (result === 'Разделить') {
//     alert(Number(number1) / Number(number2)) 
// } else {
//     alert('Введите корректное действие')
// }

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let umnozhit = document.getElementById('umnozhit')
let razdelit = document.getElementById('razdelit')
let rovno = document.getElementById('rovno')


