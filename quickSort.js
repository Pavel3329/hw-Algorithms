
//quickSort в порядке убывания значений их элементов.

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}


function quickSortDescending(array, start, end) {
    if (start < end) {
        let indexPivot = partitionDescending(array, start, end);
     
        quickSortDescending(array, start, indexPivot - 1);
      
        quickSortDescending(array, indexPivot + 1, end);
    }
}

function partitionDescending(array, start, end) {
    let pivot = array[end];
    let indexPivot = start;

    for (let i = start; i < end; i++) {
        if (array[i] >= pivot) {
            swap(array, i, indexPivot);
            indexPivot++;
        }
    }
    swap(array, end, indexPivot);

    return indexPivot;
}


let arr1 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortDescending(arr1, 0, arr1.length - 1);
console.log(arr1);



// .........................................................



//quickSort в качестве опорного элемента средний элемент массива.

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

function quickSortMiddlePivot(array, start, end) {
    if (start < end) {
        let indexPivot = partitionMiddlePivot(array, start, end);
        quickSortMiddlePivot(array, start, indexPivot - 1);
        quickSortMiddlePivot(array, indexPivot + 1, end);
    }
}

function partitionMiddlePivot(array, start, end) {
    let mid = Math.floor((start + end) / 2);
    let pivotValue = array[mid]; // СОХРАНЯЕМ ЗНАЧЕНИЕ опорного элемента
    let indexPivot = start;

    // Перемещаем опорный элемент в конец
    swap(array, mid, end);

    for (let i = start; i < end; i++) {
        if (array[i] >= pivotValue) { // сравниваем с СОХРАНЕННЫМ значением
            swap(array, i, indexPivot);
            indexPivot++;
        }
    }
    swap(array, end, indexPivot); // возвращаем опорный элемент на правильную позицию

    return indexPivot;
}

let arr2 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortMiddlePivot(arr2, 0, arr2.length - 1);
console.log(arr2); // [7, 6, 5, 4, 2, 1, 0, -2, -4]






// .........................................................


// Quick sort -Итерационный подход.

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}


function quickSortIterative(array) {
    let stack = [];
    let start = 0;
    let end = array.length - 1;
    
    stack.push({start: start, end: end});
    
    while (stack.length > 0) {
        let {start, end} = stack.pop();
        
        if (start < end) {
            let indexPivot = partitionIterative(array, start, end);
            
            // Добавляем правый и левый подмассивы в стек
            stack.push({start: start, end: indexPivot - 1});
            stack.push({start: indexPivot + 1, end: end});
        }
    }
}

function partitionIterative(array, start, end) {
    let pivot = array[end]; // выбираем опорный элемент
    let indexPivot = start; // Индекс первого элемента для сравнения с опорным

    for (let i = start; i < end; i++) {
        if (array[i] >= pivot) {
            swap(array, i, indexPivot);
            indexPivot++;
        }
    }
    swap(array, end, indexPivot); // перемещает опорный элемент в правильную позицию

    return indexPivot;
}

let arr3 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortIterative(arr3);
console.log(arr3);
