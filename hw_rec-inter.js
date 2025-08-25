// Методо вычисления факториала (n!) рекурсивным способом!

// function factorialRecursive(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorialRecursive(n - 1);
//     }
// }
// console.log(factorialRecursive(5)); // Output: 120


// Метод вычисления факториала (n!) итеративным способом!

// function factorialIterative(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorialIterative(7)); // Output: 120



// Ханойская Башня! ;)
// Recursive/

// function hanoiRecursive(n, disk1, disk2, disk3) {
//     if (n === 1) {
//         console.log(`Переместить диск 1 с ${disk1} на ${disk2}`);
//         return;
//     }

//     hanoiRecursive(n - 1, disk1, disk3, disk2);          // шаг 1
//     console.log(`Переместить диск ${n} с ${disk1} на ${disk2}`); // шаг 2
//     hanoiRecursive(n - 1, disk3, disk2, disk1);          // шаг 3
// }

// console.log("=== Рекурсивное решение ===");
// hanoiRecursive(4, "A", "C", "B");




// .........................................................................


// Iterative/

function hanoiIterative(n) {
  let rods = { A: [], B: [], C: [] };
  for (let i = n; i >= 1; i--) rods.A.push(i);

  const totalMoves = Math.pow(2, n) - 1;

  const move = (from, to) => {
    const disk = rods[from].pop();
    rods[to].push(disk);
    console.log(`Переместить диск ${disk} с ${from} на ${to}`);
  };

  const legalMove = (r1, r2) => {
    let fromTop = rods[r1][rods[r1].length - 1];
    let toTop = rods[r2][rods[r2].length - 1];
    if (!fromTop) [r1, r2] = [r2, r1];           // если r1 пустой
    else if (!toTop) {}                           // всё ок
    else if (fromTop > toTop) [r1, r2] = [r2, r1]; // всегда меньше на больший
    move(r1, r2);
  };

  // если n четное, меняем вспомогательный и целевой стержни
  let [toRod, auxRod] = n % 2 === 0 ? ["B", "C"] : ["C", "B"];

  for (let i = 1; i <= totalMoves; i++) {
    if (i % 3 === 1) legalMove("A", toRod);      // маленький диск
    else if (i % 3 === 2) legalMove("A", auxRod);
    else legalMove(auxRod, toRod);
  }
}

// пример
hanoiIterative(3);

