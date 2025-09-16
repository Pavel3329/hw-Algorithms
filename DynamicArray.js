class DynamicArray {
    constructor() {
        this.array = new Array(1);
        this.count = 0;
        this.size = 1;
        this.k = 2;
    }

    add(data) {
        if (this.count === this.size) {
            this.growSize();
        }
        this.array[this.count++] = data;
    }

    // Вставка по индексу
    addAt(index, data) {
        if (index < 0 || index > this.count) {
            return; // Индекс вне границ
        }
        
        if (this.count === this.size) {
            this.growSize();
        }
        
        // Сдвигаем элементы вправо для освобождения места
        for (let i = this.count; i > index; i--) {
            this.array[i] = this.array[i - 1];
        }
        
        this.array[index] = data;
        this.count++;
    }

    // Вставка в начало
    addFirst(data) {
        this.addAt(0, data);
    }

    remove() {
        if (this.count > 0) {
            this.array[--this.count] = undefined;
        }
    }

    // Удаляет первый элемент
    removeFirst() {
        this.removeAt(0);
    }

    // Удаляет элемент по индексу
    removeAt(index) {
        if (index < 0 || index >= this.count) {
            return;
        }
        
        for (let i = index; i < this.count - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        
        this.array[this.count - 1] = undefined;
        this.count--;
    }

    // Удаляет все элементы
    clean() {
        this.array = new Array(1);
        this.count = 0;
        this.size = 1;
    }

    // Проверяет существует ли элемент
    contains(data) {
        for (let i = 0; i < this.count; i++) {
            if (this.array[i] === data) {
                return true;
            }
        }
        return false;
    }

    // Возвращает true если массив пустой
    isEmpty() {
        return this.count === 0;
    }

    set(index, data) {
        this.array[index] = data;
    }

    growSize() {
        let temp = new Array(this.size * this.k);
        for (let i = 0; i < this.size; i++) {
            temp[i] = this.array[i];
        }
        this.array = temp;
        this.size *= this.k;
    }

    // Простой вывод элементов
    print() {
        console.log("Элементы DynamicArray:");
        for (let i = 0; i < this.count; i++) {
            console.log(this.array[i] + " ");
        }
    }
}

// Тестирование новых методов
let da = new DynamicArray();

da.add(22);
da.add(33);
da.add(44);
console.log("Исходный массив:");
da.print();

// Тест addAt
da.addAt(1, 99);
console.log("После вставки 99 по индексу 1:");
da.print();

// Тест addFirst
da.addFirst(11);
console.log("После вставки 11 в начало:");
da.print();

// Тест removeFirst
da.removeFirst();
console.log("После удаления первого элемента:");
da.print();

// Тест комплексного сценария
console.log("--- Комплексный тест ---");
da.clean();
da.addFirst(100);
da.addFirst(200);
da.addFirst(300);
console.log("После добавления в начало:");
da.print();

da.addAt(1, 250);
console.log("После вставки 250 по индексу 1:");
da.print();

da.removeFirst();
console.log("После удаления первого элемента:");
da.print();