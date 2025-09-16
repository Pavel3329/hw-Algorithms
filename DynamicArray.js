class DynamicArray {
    constructor(capacity) {
        if (capacity === undefined) {
            // Конструктор по умолчанию - size = 10
            this.array = new Array(10);
            this.count = 0;
            this.size = 10;
        } else {
            // Конструктор с кастомной capacity
            this.array = new Array(capacity);
            this.count = 0;
            this.size = capacity;
        }
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
        this.array = new Array(this.size);
        this.count = 0;
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

// Тестирование конструкторов
console.log("=== Тест конструктора по умолчанию (size = 10) ===");
let da1 = new DynamicArray();
console.log("Начальный size:", da1.size);
console.log("Начальный count:", da1.count);

// Добавляем элементы чтобы проверить расширение
for (let i = 1; i <= 15; i++) {
    da1.add(i * 10);
}
console.log("После добавления 15 элементов:");
console.log("size:", da1.size);
console.log("count:", da1.count);
da1.print();

console.log("\n=== Тест конструктора с кастомной capacity ===");
let da2 = new DynamicArray(5);
console.log("Начальный size:", da2.size);
console.log("Начальный count:", da2.count);

// Добавляем элементы
da2.add(100);
da2.add(200);
da2.add(300);
da2.add(400);
da2.add(500);
da2.add(600); // Должно вызвать расширение

console.log("После добавления 6 элементов:");
console.log("size:", da2.size);
console.log("count:", da2.count);
da2.print();

console.log("\n=== Тест методов ===");
let da3 = new DynamicArray(3);
da3.add(22);
da3.add(33);
da3.add(44);
console.log("Исходный массив:");
da3.print();

// Тест addAt
da3.addAt(1, 99);
console.log("После вставки 99 по индексу 1:");
da3.print();

// Тест addFirst
da3.addFirst(11);
console.log("После вставки 11 в начало:");
da3.print();

// Тест removeFirst
da3.removeFirst();
console.log("После удаления первого элемента:");
da3.print();