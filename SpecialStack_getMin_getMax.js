
// // 1) SpecialStack с операцией getMin()

// class Stack {
//     constructor(capacity = 10) {
//         this.size = capacity;
//         this.arr = new Array(this.size);
//         this.count = 0;
//     }

//     push(x) {
//         if (this.count === this.size) {
//             console.log("Stack overflow");
//             return false;
//         } else {
//             this.arr[this.count++] = x;
//             return true;
//         }
//     }

//     pop() {
//         if (this.count === 0) {
//             console.log("No element in stack!");
//             return -1;
//         } else {
//             return this.arr[--this.count];
//         }
//     }

//     peek() {
//         if (this.count === 0) {
//             console.log("Stack is empty!");
//             return -1;
//         }
//         return this.arr[this.count - 1];
//     }

//     isEmpty() {
//         return this.count === 0;
//     }

//     print() {
//         if (this.count === 0) {
//             console.log("Stack is empty");
//             return;
//         }
//         console.log("Stack contents:");
//         for (let i = this.count - 1; i >= 0; i--) {
//             console.log(this.arr[i]);
//         }
//     }
// }

// class SpecialStack {
//     constructor(capacity = 10) {
//         this.mainStack = new Stack(capacity);
//         this.minStack = new Stack(capacity);
//     }

//     push(x) {
//         if (this.mainStack.push(x)) {
//             // Если minStack пуст или новый элемент меньше/равен текущему минимуму
//             if (this.minStack.isEmpty() || x <= this.getMin()) {
//                 this.minStack.push(x);
//             }
//             console.log(x + " pushed to SpecialStack");
//             return true;
//         }
//         return false;
//     }

//     pop() {
//         if (this.mainStack.isEmpty()) {
//             console.log("No element in SpecialStack!");
//             return -1;
//         }

//         const popped = this.mainStack.pop();

//         // Если удаляемый элемент был минимальным, удаляем его и из minStack
//         if (popped === this.getMin()) {
//             this.minStack.pop();
//         }

//         console.log(popped + " popped from SpecialStack");
//         return popped;
//     }

//     getMin() {
//         if (this.minStack.isEmpty()) {
//             console.log("SpecialStack is empty!");
//             return -1;
//         }
//         return this.minStack.peek();
//     }

//     isEmpty() {
//         return this.mainStack.isEmpty();
//     }

//     print() {
//         console.log("SpecialStack contents:");
//         this.mainStack.print();
//         console.log("Current minimum: " + (this.isEmpty() ? "Stack empty" : this.getMin()));
//     }
// }

// // Тестирование SpecialStack
// console.log("=== Testing SpecialStack ===");
// const specialStack = new SpecialStack(5);

// specialStack.push(5);
// specialStack.push(3);
// specialStack.push(7);
// console.log("Min element: " + specialStack.getMin()); // 3

// specialStack.push(2);
// specialStack.push(8);
// console.log("Min element: " + specialStack.getMin()); // 2

// specialStack.pop(); // удаляем 8
// console.log("Min element after popping 8: " + specialStack.getMin()); // 2

// specialStack.pop(); // удаляем 2
// console.log("Min element after popping 2: " + specialStack.getMin()); // 3

// specialStack.print();


// ............................................

// 2) SpecialStack с операцией getMax()


class Stack {
    constructor(capacity = 10) {
        this.size = capacity;
        this.arr = new Array(this.size);
        this.count = 0;
    }

    push(x) {
        if (this.count === this.size) {
            console.log("Stack overflow");
            return false;
        } else {
            this.arr[this.count++] = x;
            return true;
        }
    }

    pop() {
        if (this.count === 0) {
            console.log("No element in stack!");
            return -1;
        } else {
            return this.arr[--this.count];
        }
    }

    peek() {
        if (this.count === 0) {
            console.log("Stack is empty!");
            return -1;
        }
        return this.arr[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    print() {
        if (this.count === 0) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack contents:");
        for (let i = this.count - 1; i >= 0; i--) {
            console.log(this.arr[i]);
        }
    }
}

class SpecialStack {
    constructor(capacity = 10) {
        this.mainStack = new Stack(capacity);
        this.maxStack = new Stack(capacity); // переименовал minStack в maxStack
    }

    push(x) {
        if (this.mainStack.push(x)) {
            // Если maxStack пуст или новый элемент БОЛЬШЕ/равен текущему максимуму
            if (this.maxStack.isEmpty() || x >= this.getMax()) { // поменял <= на >=
                this.maxStack.push(x);
            }
            console.log(x + " pushed to SpecialStack");
            return true;
        }
        return false;
    }

    pop() {
        if (this.mainStack.isEmpty()) {
            console.log("No element in SpecialStack!");
            return -1;
        }

        const popped = this.mainStack.pop();

        // Если удаляемый элемент был максимальным, удаляем его и из maxStack
        if (popped === this.getMax()) {
            this.maxStack.pop();
        }

        console.log(popped + " popped from SpecialStack");
        return popped;
    }

    getMax() { // переименовал getMin в getMax
        if (this.maxStack.isEmpty()) {
            console.log("SpecialStack is empty!");
            return -1;
        }
        return this.maxStack.peek();
    }

    isEmpty() {
        return this.mainStack.isEmpty();
    }

    print() {
        console.log("SpecialStack contents:");
        this.mainStack.print();
        console.log("Current maximum: " + (this.isEmpty() ? "Stack empty" : this.getMax())); // поменял minimum на maximum
    }
}

// Тестирование SpecialStack
console.log("=== Testing SpecialStack with getMax() ===");
const specialStack = new SpecialStack(5);

specialStack.push(5);
specialStack.push(3);
specialStack.push(7);
console.log("Max element: " + specialStack.getMax()); // 7

specialStack.push(2);
specialStack.push(8);
console.log("Max element: " + specialStack.getMax()); // 8

specialStack.pop(); // удаляем 8
console.log("Max element after popping 8: " + specialStack.getMax()); // 7

specialStack.pop(); // удаляем 2
console.log("Max element after popping 2: " + specialStack.getMax()); // 7

specialStack.print();