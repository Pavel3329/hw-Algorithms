

// 11 членов последовательности Фибоначчи.
// рекурсивная реализация (наивная)


function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

for (let i = 1; i <= 11; i++) {
  console.log(fib(i));
}

// // .............
// // Улучшение через мемоизацию (алгоритм РиВ = "разделяй и властвуй")

function fib(n, memo = {}) {
  if (n in memo) return memo[n];     // уже считали → возвращаем
  if (n === 1 || n === 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

for (let i = 1; i <= 11; i++) {
  console.log(fib(i));
}
// .................


// два отсортированных массива, - найти элемент: к = 7 в Окончательном отсортированном массиве:
//Реализовано -Без создания самого окончательного нового массива!

const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

function findKthElement(arr1, arr2, k) {
  let i = 0, j = 0, count = 0;
  let result = null;

  while (i < arr1.length && j < arr2.length) {
    let val;
    if (arr1[i] < arr2[j]) {
      val = arr1[i];
      i++;
    } else {
      val = arr2[j];
      j++;
    }

    count++;
    if (count === k) {
      result = val;
      break;
    }
  }

  // Если один массив закончился
  while (result === null && i < arr1.length) {
    count++;
    if (count === k) result = arr1[i];
    i++;
  }

  while (result === null && j < arr2.length) {
    count++;
    if (count === k) result = arr2[j];
    j++;
  }

  return result;
}

console.log(findKthElement(arr1, arr2, k)); // 256

