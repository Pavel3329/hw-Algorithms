// 3) DynamicStack_No_OverFlow

class DynamicStack {
    constructor(initialCapacity = 10) {
        this.arr = new Array(initialCapacity);
        this.count = 0;
        this.capacity = initialCapacity;
    }

    push(x) {
        // Если массив заполнен, увеличиваем его размер в 2 раза
        if (this.count === this.capacity) {
            this.resize(this.capacity * 2);
        }
        
        this.arr[this.count++] = x;
        console.log(x + " pushed to DynamicStack");
        return true;
    }

    pop() {
        if (this.count === 0) {
            console.log("No element in DynamicStack!");
            return -1;
        }
        
        const popped = this.arr[--this.count];
        
        // Если элементов стало меньше 25% от capacity, уменьшаем массив в 2 раза
        if (this.count > 0 && this.count <= Math.floor(this.capacity / 4)) {
            this.resize(Math.max(10, Math.floor(this.capacity / 2)));
        }
        
        console.log(popped + " popped from DynamicStack");
        return popped;
    }

    peek() {
        if (this.count === 0) {
            console.log("DynamicStack is empty!");
            return -1;
        }
        return this.arr[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    resize(newCapacity) {
        const newArr = new Array(newCapacity);
        
        // Копируем элементы в новый массив
        for (let i = 0; i < this.count; i++) {
            newArr[i] = this.arr[i];
        }
        
        this.arr = newArr;
        this.capacity = newCapacity;
        console.log("Stack resized to capacity: " + newCapacity);
    }

    print() {
        if (this.count === 0) {
            console.log("DynamicStack is empty");
            return;
        }
        console.log("DynamicStack contents (capacity: " + this.capacity + ", size: " + this.count + "):");
        for (let i = this.count - 1; i >= 0; i--) {
            console.log(this.arr[i]);
        }
    }

    getCapacity() {
        return this.capacity;
    }

    getSize() {
        return this.count;
    }
}

// Тестирование DynamicStack
console.log("\n=== Testing DynamicStack ===");
const dynamicStack = new DynamicStack(3); // Маленькая начальная емкость для демонстрации

console.log("Initial capacity: " + dynamicStack.getCapacity());

dynamicStack.push(10);
dynamicStack.push(20);
dynamicStack.push(30); // Должно вызвать увеличение размера
dynamicStack.push(40);
dynamicStack.push(50); // Снова увеличение

dynamicStack.print();

dynamicStack.pop();
dynamicStack.pop();
dynamicStack.pop();
dynamicStack.pop(); // Должно вызвать уменьшение размера

dynamicStack.print();
console.log("Final capacity: " + dynamicStack.getCapacity());