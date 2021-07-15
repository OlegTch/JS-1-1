//  === TO NUMBER ===

//  любое строчное значение к ЧИСЛУ   
let value = "Hello World";

//  1-й способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//  2-й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//  строчное число к ЧИСЛУ   
value = "1234567890";

//  1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//  2-й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//  пустая строка к ЧИСЛУ   
value = "";

//  1-й способ
toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных пустой строки ${value}, через конструктор Number(): `, typeof toNumber);

//  2-й способ
toNumber = +value;
console.log(`пустая строка ${value}, через унарный +: `, toNumber);
console.log(`тип данных пустой строки ${value}, через унарный +: `, typeof toNumber);

//  строка с пробелом к ЧИСЛУ   
value = " ";

//  1-й способ
toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных строки с пробелом ${value}, через конструктор Number(): `, typeof toNumber);

//  2-й способ
toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(`тип данных строки с пробелом ${value}, через унарный +: `, typeof toNumber);

//  БУЛЕВОЕ (логическое) true к ЧИСЛУ
value = true;
//  1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);
//  2-й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//  БУЛЕВОЕ (логическое) false к ЧИСЛУ
value = false;
//  1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);
//  2-й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// ------

//  null к ЧИСЛУ
value = null;
//  1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);
//  2-й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// ------

// undefined к ЧИСЛУ
value = undefined;
//  1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);
//  2-й способ
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);