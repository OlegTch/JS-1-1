console.log('variables');

// STRING
let stringData = "string data";
console.log(stringData);
//  typeof - оператор определения типа данных
console.log(typeof stringData);

stringData = "";
console.log(stringData);
console.log(typeof stringData);

stringData = " ";
console.log(stringData);
console.log(typeof stringData);

// NUMBER
let number = 1;
console.log(number);
console.log(typeof number);

number = 2e53;
console.log(number);
console.log(typeof number);

number = Infinity;
console.log(number);
console.log(typeof number);

number = NaN; // NaN - Not a Number
console.log(number);
console.log(typeof number);

// BOOLEAN true || false
let isOnLine = true;
console.log(isOnLine);
console.log(typeof isOnLine);

isOnLine = false;
console.log(isOnLine);
console.log(typeof isOnLine);

// underfined
let message;
console.log(message);
console.log(typeof message);

// null
let user = null;
console.log(user);
console.log(typeof user);  // примитивный тип данный говорит, что он object