// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

// Без использования функций из пункта 5:

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "addition":
            return arg1 + arg2;
        case "subtraction":
            return arg1 - arg2;
        case "multiplication":
            return arg1 * arg2;
        case "division":
            return arg1 / arg2;
    }
}


// Используя функции из пункта 5:

// Сложение
function addition(a, b) {
    return a + b;
};
// Вычитание
function subtraction(a, b) {
    return a - b;
};
// Умножение
function multiplication(a, b) {
    return a * b;
};
// Деление
function division(a, b) {
    return a / b;
};

function mathOperation_1(arg1, arg2, operation) {
    switch (operation) {
        case "addition":
            return addition(arg1, arg2);
        case "subtraction":
            return subtraction(arg1, arg2);
        case "multiplication":
            return multiplication(arg1, arg2);
        case "division":
            return division(arg1, arg2);
    }
};
