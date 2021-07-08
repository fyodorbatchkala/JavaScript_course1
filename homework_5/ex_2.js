const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><i>Наименование:</i> ${good.name}</div>
                    <div><i>Цена за штуку:</i> ${good.price}</div>
                    <div><i>Количество:</i> ${good.quantity}</div>
                    <div><i>Общая цена:</i> ${good.quantity * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            id: 123,
            name: 'Computer',
            price: 3000,
            quantity: 2,
        },
        {
            id: 456,
            name: 'Scanner',
            price: 1000,
            quantity: 1,
        },
        {
            id: 789,
            name: 'Printer',
            price: 2000,
            quantity: 4,
        },
    ],

    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.render();
    },

    render() {
        if (this.goods.length !== 0) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(я) (всего товаров: ${this.getQuantity()}) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },

    clearCart() {
        this.goods = [];
        this.render();
    },

    getQuantity() {  //добавил метод для того, чтобы можно было увидеть и полное количество товаров (не позиций)
        return this.goods.reduce(function (quantity, good) {
            return quantity + good.quantity;
        }, 0);
    },
};

cart.init();
