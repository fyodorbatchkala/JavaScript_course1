// 7. *Сравнить null и 0. Попробуйте объяснить результат.

let a = null;
let b = 0;

console.log(a > b); // false
console.log(a >= b); // true
console.log(a < b); // false
console.log(a <= b); // true

// Эти операторы сравнения: >, >=, <, <= приводят null к значению 0, получается, что 0 >= 0, 0 <= 0 - истина (получаем true). 0 > 0, 0 < 0 - ложь (получаем false). 

console.log(a == b); // false
console.log(a === b); // false

// Оператор == не приводит null ни к чему и сравнивается null (undefined) и 0, а они не равны. Оператор === также не приводит null ни к чему и сравнивается null (undefined) и 0, а они не равны. Также они не равны по типу (типа undefined и тип number), который проверяется третьим знаком ревенства.