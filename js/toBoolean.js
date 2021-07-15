// === TO BOOLEAN  ===

// любое строчное значение к БУЛЮ
let value = "Hello World";

//  1-й способ
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных ${value}, через двойное орицание: `, typeof toBoolean);

// любое строчное число к БУЛЮ
value = "1234567890";

//  1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных ${value}, через двойное орицание: `, typeof toBoolean);

// пустая строка к БУЛЮ
value = "";

//  1-й способ
toBoolean = Boolean(value);
console.log(`пустая строка ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных пустая строка ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`пустая строка ${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных пустая строка ${value}, через двойное орицание: `, typeof toBoolean);

// строка с пробелом к БУЛЮ
value = " ";

//  1-й способ
toBoolean = Boolean(value);
console.log(`строка с пробелом ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных строка с пробелом ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`строка с пробелом ${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных строка с пробелом ${value}, через двойное орицание: `, typeof toBoolean);

// число к БУЛЮ
value = 0;

//  1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных ${value}, через двойное орицание: `, typeof toBoolean);

// число к БУЛЮ
value = 1;

//  1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных ${value}, через двойное орицание: `, typeof toBoolean);

// число к БУЛЮ
value = NaN;

//  1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных ${value}, через двойное орицание: `, typeof toBoolean);

// число к БУЛЮ
value = Infinity;

//  1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных ${value}, через двойное орицание: `, typeof toBoolean);

// undefined к БУЛЮ
value = undefined;

//  1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных ${value}, через двойное орицание: `, typeof toBoolean);

// null к БУЛЮ
value = undefined;

//  1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//  2-й способ
toBoolean = !!value;
console.log(`${value}, через двойное орицание: `, toBoolean);
console.log(`тип данных ${value}, через двойное орицание: `, typeof toBoolean);