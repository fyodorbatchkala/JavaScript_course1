// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 3. Товары в корзине хранятся в массиве. Задачи: 1. Организовать такой массив для хранения товаров в корзине; 2. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// let товар = [название, цена, количество]

// Вариант без цикла

let good1 = ['computer', 1000, 3];
let good2 = ['printer', 300, 1];
let good3 = ['scanner', 250, 2];
let cart = [good1, good2, good3];

function countBasketPrice(cart) {
    return (cart[0][1] * cart[0][2] + cart[1][1] * cart[1][2] + cart[2][1] * cart[2][2]); // умножение цены на кол-во
}

console.log(countBasketPrice(cart));  // 3800



// Вариант с использованием цикла для неограниченного кол-ва товаров 

let good1 = ['computer', 1000, 3];
let good2 = ['printer', 300, 1];
let good3 = ['scanner', 250, 2];
let cart = [good1, good2, good3];

function countBasketPrice(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i][1] * cart[i][2];
    }
    return 'Стоимость покупки: ' + total;
}

console.log(countBasketPrice(cart));  // 3800
