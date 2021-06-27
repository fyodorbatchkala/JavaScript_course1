// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.


let good1 = {
    name: 'computer',
    cost: 1000,
    quantity: 3
};

let good2 = {
    name: 'printer',
    cost: 300,
    quantity: 1
};

let good3 = {
    name: 'scanner',
    cost: 250,
    quantity: 2
};

// Первый вариант реализации (с использованием reduce())

let cart = {
    goods: [good1, good2, good3],
    total() {
        return 'Стоимость покупки: ' + this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.cost * cartItem.quantity, 0);
    }
};

// Второй вариант реализации (с использованием цикла)

let cart = {
    goods: [good1, good2, good3],
    total() {
        let total = 0;
        for (let i = 0; i < this.goods.length; i++) {
            total += this.goods[i].cost * this.goods[i].quantity;
        }
        return 'Стоимость покупки: ' + total;
    }
};
