//  === TO STRING ===

//  ЧИСЛО К СТРОКЕ   
let value = 0;

//  1-й способ
let toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//  2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

value = 1;
//  1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);
//  2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//  значение бесконечности к СТРОКЕ
value = Infinity;
//  1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);
//  2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//  не число к СТРОКЕ
value = NaN;
//  1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);
//  2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// ------

//  БУЛЕВОЕ (логическое) true к СТРОКЕ
value = true;
//  1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);
//  2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//  БУЛЕВОЕ (логическое) false к СТРОКЕ
value = false;
//  1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);
//  2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// ------

//  null к СТРОКЕ
value = null;
//  1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);
//  2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// ------

// undefined к СТРОКЕ
value = undefined;
//  1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);
//  2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);