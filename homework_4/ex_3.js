// 3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

function createProduct(name, cost, quantity, about = 'Lorem') {
    return {
        name,
        cost,
        quantity,
        about,
        add_item(numOfItems=1) {
            this.quantity += numOfItems;
        },
        remove_item(numOfItems=1) {
            this.quantity -= numOfItems;
            if (this.quantity < 0) {
                this.quantity = 0;     //если пытаемся убрать больше, чем есть
            }
        }
    }
};



// Функцией createProduct можно создать те продукты, которые мы создали в задании 2. 

let computer = createProduct('computer', 1000, 3, 'Это компьютер');
let printer = createProduct('printer', 300, 1, 'Это принтер');
let scanner = createProduct('scanner', 250, 2, 'Это сканер');

console.log(computer, printer, scanner); 

// {name: "computer", cost: 1000, quantity: 3, about: "Это компьютер"} 
// {name: "printer", cost: 300, quantity: 1, about: "Это принтер"} 
// {name: "scanner", cost: 250, quantity: 2, about: "Это сканер"}

scanner.add_item(5); // добавить 5 сканеров к количеству (параметру quantity)
console.log(scanner); 

scanner.remove_item(100);  // вычесть 100 сканеров из количества (параметра quantity) >> 0, тк сканеров всего 7
console.log(scanner); 
