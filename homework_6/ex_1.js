"use strict";

// создали каталог
const catalog = { 
    catalogBlock: null,
    cart: null,
    list: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 100000,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
        },
        {
            id_product: 789,
            product_name: 'Клавиатура',
            price: 2000,
        }
    ],

// инициализируем каталог (функцию пишем) передаем класс каталога и корзину
    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`); // выбираем нужный блок селектором
        this.cart = cart; // присваиваем значению параметра корзины объект cart
        this.render(); // запускаем функцию отрисовки
        this.addEventHandlers(); // запускаем обработчики событий
    },

// отрисовка при условии наличия товаров в каталоге (длина массива > 0)
    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

// добавляем реагирование на нажатие кнопки добавить в корзину
    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

// добавление в корзину при клике на кнопку ДОБАВИТЬ
    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return; // если уже есть продукт return 
        const id_product = +event.target.dataset.id_product; // id переводим в число
        const productToAdd = this.list.find((product) => product.id_product === id_product); // добавляем продукт по id
        this.cart.addToBasket(productToAdd); // в корзину добавляем товар через функцию
    },

// длину каталога вычисляем
    getCatalogListLength() {
        return this.list.length;
    },

// отрисовываем каталог 
    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item)); // отрисовываем каталог
        });
    },

// отрисовка каждого из элементов каталога
    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">В корзину</button>
            </div><br><br>`;
    },

// отрисовка пустого каталога (при условии что там нет товаров)
    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'В каталоге отсутствуют товары.';
    },
};

// сущность корзины
const cart = {
    cartBlock: null,
    clrCartButton: null,
    goods: [],

    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        this.addEventHandlers();
        this.render();
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.goods = [];
        this.render();
    },

    render() {
        // if (this.goods.length) {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find((item) => product.id_product === item.id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1});
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    getCartGoodsLength() {
        return this.goods.length;
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderCartItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },
};

// инициализация каталога
catalog.init('catalog', cart);
// инициализация корзины
cart.init('cart', 'clear-cart');
