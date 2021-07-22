// 1. С помощью цикла вывести все простые числа в промежутке от 0 до 100.

for (let i = 1; i <= 100; i++) {
    let check = false;
    for (let n = 2; n < i; n++) {
        if (i % n == 0) {
            check = true;
            break;
        }
    }
    if (i > 1 && check == false) {
        console.log(i);
    }
};