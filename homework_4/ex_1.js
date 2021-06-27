// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function converter(a) {
    let units = a % 10;
    let tens = 0;
    let hundreds = 0;
    if (a >= 10 && a <= 99) {
        tens = Math.floor(a / 10);
    } else if (a >= 100 && a <= 999) {
        hundreds = Math.floor(a / 100);
        tens = Math.floor(a / 10) % 10;
        units = a % 100 % 10;
    } else if (a >999) {
        return 'Enter a number between 0 and 999 ' + {};
    } else {}
    return {
        units,
        tens,
        hundreds
    }
};

console.log(converter(999));
